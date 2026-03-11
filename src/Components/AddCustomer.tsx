import {
  Grid,
  Button,
  Typography,
  TextField,
  Box,
  Autocomplete,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { New_industriesService } from "../generated";
import type { New_industries} from "../generated/models/New_industriesModel";
import { useEffect, useState } from "react";
import { dataSourcesInfo } from "../../.power/schemas/appschemas/dataSourcesInfo";

const AddCustomer = () => {
  const navigate = useNavigate();
  const [Industry, setIndustry] = useState<New_industries[]>([]);

  useEffect(() => {
    New_industriesService.getAll().then((res) => {
      console.log(res.data);
      setIndustry(res.data);
    });
  }, []);

  return (
    <>
      <Grid container spacing={2} sx={{ margin: 2 }} alignItems="center">
        <Grid size={12}>
          <IconButton onClick={() => navigate(-1)} aria-label="back">
            <ArrowBackIcon />
          </IconButton>
        </Grid>

        <Grid size={4}>
          <Grid>
            <Typography variant="h6" gutterBottom>
              Customer Name / Agency details
            </Typography>
          </Grid>
          <Grid>
            <TextField fullWidth></TextField>
          </Grid>
        </Grid>

        <Grid size={4}>
          <Grid>
            <Typography variant="h6" gutterBottom>
              Industry
            </Typography>
          </Grid>
          <Grid>
            <Autocomplete
              options={Industry.map((option) => option.new_name || "")}
              onInputChange={(event, newInputValue) => {
                console.log(newInputValue);
              }}
              renderInput={(params) => <TextField {...params} label="select industry"/>}
            ></Autocomplete>
          </Grid>

                




        </Grid>

        <Grid size={4}>
          <Grid>
            <Typography variant="h6" component="h1" gutterBottom>
              Add New Customer
            </Typography>
          </Grid>
          <Grid>
            <TextField fullWidth></TextField>
          </Grid>
        </Grid>



        <Button onClick={()=>{console.log(Industry)}}>Test values</Button>
      </Grid>
    </>
  );
};

export default AddCustomer;
