import { LoadingButton } from "@mui/lab";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import FakeUsers from "./components/FakeUsers";
import { CSVLink } from "react-csv";
import ErrorFieldSlider from "./components/ErrorFieldSlider";

function App() {
  const [currentSeed, setCurrentSeed] = useState(123);
  const [list, setList] = useState([]);
  const [region, setRegion] = useState("pl");
  const handleSeedChange = (e) => {
    const newSeed = parseInt(e.target.value, 10);
    setCurrentSeed(newSeed);
  };
  const generateRandomSeed = () => {
    const randomSeed = Math.floor(Math.random() * 1000000) + 1;
    return randomSeed;
  };
  const handleRandomSeed = () => {
    const randomSeed = generateRandomSeed();
    setCurrentSeed(randomSeed);
  };
  const handleRegionChange = (event) => {
    setRegion(event.target.value);
    setList([]);
  };
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
              labelId="region-label"
              id="region-select"
              value={region}
              onChange={handleRegionChange}
              autoWidth
              label="Country"
              color="success"
            >
              <MenuItem value="en_us">USA</MenuItem>
              <MenuItem value="pl">Poland</MenuItem>
              <MenuItem value="tr">Turkish</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <CSVLink data={list} filename={"user_data.csv"}>
            <LoadingButton variant="contained" size="" color="success">
              Export to CSV
            </LoadingButton>
          </CSVLink>
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
              defaultValue={123}
              type="number"
              variant="outlined"
              color="success"
              size="small"
              value={currentSeed}
              onChange={handleSeedChange}
            />
          </div>
          <div className="flex">
            <LoadingButton
              variant="outlined"
              size=""
              color="success"
              onClick={handleRandomSeed}
            >
              Random
            </LoadingButton>
          </div>
        </div>
      </div>
      <ErrorFieldSlider />
      <FakeUsers setList={setList} selectedRegion={region} seed={currentSeed} />
    </>
  );
}

export default App;
