import { LoadingButton } from "@mui/lab";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
} from "@mui/material";
import { useState } from "react";

const min = 0;
const max = 1000;

function App() {
  const [value, setValue] = useState();
  return (
    <>
      <div className="flex flex-col justify-center text-center mt-[20px] gap-[10px]">
        <img
          className="flex justify-center text-center h-[50px] w-[50px] mx-auto"
          src="app.svg"
          alt=""
        />
        <span className="text-3xl font-bold tracking-wide drop-shadow">
          Random User
        </span>
        <span className="text-[19px] tracking-wide">
          This is a web application for generating fake (random) user data.
        </span>
      </div>
      <div className="flex justify-center max-w-[800px] gap-[20px] mx-auto items-center mt-[20px]">
        <div className="flex ">
          <FormControl size="small" sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-autowidth-label" color="success">
              Country
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              // value={age}
              // onChange={handleChange}
              autoWidth
              label="Country"
              color="success"
            >
              <MenuItem value={10}>USA</MenuItem>
              <MenuItem value={21}>Poland</MenuItem>
              <MenuItem value={22}>Turkish</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <LoadingButton variant="contained" size="" color="success">
            Export to CSV
          </LoadingButton>
        </div>
      </div>

      <div className="border rounded-md max-w-[1000px] mx-auto pb-[25px]">
        <div className="flex mt-[20px] justify-center gap-[40px] items-center mx-auto max-w-[800px]">
          <span className="flex text-[16px] text-center font-semibold tracking-wide">
            Seed
          </span>
          <div className="flex max-w-[200px]">
            <TextField
              fullWidth
              defaultValue={1}
              type="number"
              variant="outlined"
              color="success"
              size="small"
            />
          </div>
          <div className="flex">
            <LoadingButton variant="outlined" size="" color="success">
              Random
            </LoadingButton>
          </div>
        </div>
      </div>

      <div className="border rounded-md max-w-[1000px] mx-auto pb-[25px] mt-[5px]">
        <div className="flex mt-[20px] justify-center gap-[40px] items-center mx-auto max-w-[800px]">
          <span className="flex text-[16px] text-center font-semibold tracking-wide">
            Emulation of data <br /> entry errors
          </span>
          <div className="flex max-w-[200px]">
            <TextField
              color="success"
              size="small"
              fullWidth
              defaultValue={0}
              type="number"
              inputProps={{ min, max }}
              value={value}
              onChange={(e) => {
                let value = parseInt(e.target.value, 10);

                if (value > max) value = max;
                if (value < min) value = min;

                setValue(value);
              }}
              variant="outlined"
            />
          </div>
          <Slider
            className="flex max-w-[180px] justify-center"
            color="success"
            defaultValue={0}
            aria-label="Default"
            valueLabelDisplay="auto"
            min={0}
            max={10}
            step={0.25}
            slots="input"
            size="small"
          />
        </div>
      </div>
      <div className="border flex flex-col max-w-[1200px] mx-auto mt-[15px]">
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
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      1
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Mark</td>
                    <td className="whitespace-nowrap px-6 py-4">Otto</td>
                    <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                    <td className="whitespace-nowrap px-6 py-4">+123456789</td>
                  </tr>
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 ">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      2
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                    <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                    <td className="whitespace-nowrap px-6 py-4">@fat</td>
                    <td className="whitespace-nowrap px-6 py-4">+123456789</td>
                  </tr>
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 ">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      3
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    <td className="whitespace-nowrap px-6 py-4">+123456789</td>
                  </tr>
                  <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 ">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      4
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">Jhony</td>
                    <td className="whitespace-nowrap px-6 py-4">Kenid</td>
                    <td className="whitespace-nowrap px-6 py-4">@trims</td>
                    <td className="whitespace-nowrap px-6 py-4">+123456789</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

("301 117");
export default App;
