import { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fakerEN_US, fakerPL, fakerTR } from "@faker-js/faker";
import makeMistakes from "./ErrorHelper";

const FakeUsers = ({ seed, selectedRegion, setList, mistakesCount }) => {
  const [usersList, setUsersList] = useState([]);
  const [page, setPage] = useState(1);

  const loadMoreData = () => {
    setPage(page + 1);
  };

  const getFakerInstance = useCallback(() => {
    let fakerInstance = fakerPL;
    if (selectedRegion === "en_us") {
      fakerInstance = fakerEN_US;
    } else if (selectedRegion === "tr") {
      fakerInstance = fakerTR;
    }
    return fakerInstance;
  }, [selectedRegion]);

  const createUser = useCallback(
    (fakerInstance) => {
      if (mistakesCount === 0) {
        return {
          randomID: fakerInstance.database.mongodbObjectId(),
          randomName: fakerInstance.person.fullName(),
          randomAddress: fakerInstance.location.streetAddress(),
          randomPhone: fakerInstance.phone.number(),
        };
      } else {
        return {
          randomID: fakerInstance.database.mongodbObjectId(),
          randomName: makeMistakes(
            fakerInstance.person.fullName(),
            selectedRegion,
            false,
            mistakesCount
          ),
          randomAddress: makeMistakes(
            fakerInstance.location.streetAddress(),
            selectedRegion,
            false,
            mistakesCount
          ),
          randomPhone: makeMistakes(fakerInstance.phone.number(), selectedRegion,
          true,
          mistakesCount),
        };
      }
    },
    [mistakesCount, selectedRegion]
  );

  useEffect(() => {
    setUsersList([]);
    setPage(1);
    const fakerInstance = getFakerInstance();
    fakerInstance.seed(seed);
  }, [seed, getFakerInstance, mistakesCount]);

  useEffect(() => {
    const itemsPerPage = 20;
    let loadedData = [];

    const fakerInstance = getFakerInstance();

    for (let i = (page - 1) * itemsPerPage; i < page * itemsPerPage; i++) {
      loadedData.push(createUser(fakerInstance));
    }

    setUsersList((prevUsersList) => [...prevUsersList, ...loadedData]);
  }, [page, getFakerInstance, seed, createUser]);

  useEffect(() => {
    setList(usersList);
  }, [usersList, setList]);

  return (
    <div className="border flex flex-col max-w-[1200px] mx-auto mt-[15px]">
      <InfiniteScroll
        dataLength={usersList.length}
        next={loadMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      №
                    </th>
                    <th scope="col" className="px-6 py-4">
                      ID
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Full name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Phone
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {usersList.map((user, index) => {
                    return (
                      <tr
                        key={user.randomID}
                        className="border-b transition duration-300 ease-in-out hover:bg-neutral-100"
                      >
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {index + 1}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {user.randomID}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {user.randomName}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {user.randomAddress}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {user.randomPhone}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default FakeUsers;
