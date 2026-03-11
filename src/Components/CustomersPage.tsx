// import Loader from "./Loader";
// import { Button, Grid } from "@mui/material";
// import type { New_customerses } from "../generated/models/New_customersesModel";
// import { New_customersesService } from "../generated/services/New_customersesService";
// import { useEffect, useState } from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import type { GridColDef } from "@mui/x-data-grid";

// const CustomersPage = () => {
//   const [Customers, setCustomers] = useState<New_customerses[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     fetchCustomers();
//   }, []);

//   const fetchCustomers = async () => {
//     setLoading(true);
//     try {
//       const resp = await New_customersesService.getAll();
//       setCustomers(resp.data ?? []);
//     } catch (error) {
//       console.error("Failed to fetch customers", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const CustomerColumns: GridColDef[] = [

//     {field: "new_companynameagencydetail",headerName: "Company Name",width: 200},
//     { field: "_new_industry_value@OData.Community.Display.V1.FormattedValue", headerName: "Industry", width: 200 },
//     { field: "new_customerwebsite", headerName: "Website", width: 250 },
//     { field: "new_revenueinusd", headerName: "Revenue", width: 150 },
//     { field: "new_region", headerName: "Region", width: 150 },
//     { field: "_new_leadsource_value@OData.Community.Display.V1.FormattedValue", headerName: "LeadSource", width: 150 },
//     { field: "_new_leadowner_value@OData.Community.Display.V1.FormattedValue", headerName: "LeadOwner", width: 150 },

//     {field:"Operations",headerName:"operations",width:150,renderCell: (params) => (
//       <Grid spacing={5} >
//         <Button variant="contained">Edit</Button>
//         <Button variant="outlined">View</Button>
//         </Grid>

//       )

//       }
//   ];
//   return (
//     <>
//       {loading ? (
//         <Loader />
//       ) : (
//         <div>
//           <div style={{  width: "100%" }}>
//             <DataGrid
//               rows={Customers}
//               columns={CustomerColumns}
//               getRowId={(row) => row.new_customersid}
//               loading={loading}
//               pageSizeOptions={[5]}
//               sx={{
//                 "& .MuiDataGrid-columnHeaders": {
//                   backgroundColor: "#1976d2",
//                 },
//                 "& .MuiDataGrid-columnHeaderTitle": {
//                   color: "#fff",
//                   fontWeight: "bold",
//                 },
//                 "& .MuiDataGrid-columnHeader": {
//                   backgroundColor: "#1976d2",
//                 },
//               }}
//             />
//           </div>

//           <Button
//             onClick={() => {
//               console.log(Customers);
//             }}
//           >
//             Hi
//           </Button>
//         </div>
//       )}
//     </>
//   );
// };

// export default CustomersPage;

import { useEffect, useState } from "react";
import { Button, Grid, Link, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";

import Loader from "./Loader";
import type { New_customerses } from "../generated/models/New_customersesModel";
import { New_customersesService } from "../generated/services/New_customersesService";

const CustomersPage = () => {
  const [customers, setCustomers] = useState<New_customerses[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => { fetchCustomers(); }, []);

  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const resp = await New_customersesService.getAll();
      setCustomers(resp.data ?? []);
    } catch (error) {
      console.error("Failed to fetch customers", error);
    } finally {
      setLoading(false);
    }
  };

  const columns: GridColDef[] = [
    {
      field: "new_companynameagencydetail",
      headerName: "Company Name",
      flex: 1.5,
      minWidth: 220,
      renderCell: (params) => (
        <strong style={{ color: "#1976d2" }}>{params.value}</strong>
      ),
    },
    {
      field: "_new_industry_value@OData.Community.Display.V1.FormattedValue",
      headerName: "Industry",
      flex: 1,
      minWidth: 160,
    },
    {
      field: "new_customerwebsite",
      headerName: "Website",
      flex: 1.5,
      minWidth: 240,
      renderCell: (params) =>
        params.value ? (
          <Link href={params.value} target="_blank" underline="hover">
            {params.value}
          </Link>
        ) : (
          "-"
        ),
    },
    {
      field: "new_revenueinusd",
      headerName: "Revenue",
      flex: 1,
      minWidth: 150,
      valueFormatter: (params) =>
        params ? `$${Number(params).toLocaleString()}` : "-",
    },
    {
      field: "new_region",
      headerName: "Region",
      flex: 1,
      minWidth: 140,
    },
    {
      field: "_new_leadsource_value@OData.Community.Display.V1.FormattedValue",
      headerName: "Lead Source",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "_new_leadowner_value@OData.Community.Display.V1.FormattedValue",
      headerName: "Lead Owner",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      filterable: false,
      width: 120,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <Button
            size="small"
            onClick={() => {
              navigate("./addcustomer");
            }}
          >
            <EditIcon fontSize="small" />
          </Button>
          <Button size="small" onClick={() => console.log("View", params.row)}>
            <VisibilityIcon fontSize="small" />
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Grid container size={12}>
           
              <Button
                variant="contained"
                onClick={() => navigate("addcustomer")}
              >
                Add Customer
              </Button>
           

            <div style={{ width: "100%" }}>
              <DataGrid
                rows={customers}
                columns={columns}
                getRowId={(row) => row.new_customersid}
                pageSizeOptions={[5, 10, 25]}
                rowHeight={52}
                disableRowSelectionOnClick
                sx={{
                  border: "none",
                  backgroundColor: "#fff",
                  "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: "#f4f6f8",
                    borderBottom: "1px solid #e0e0e0",
                  },
                  "& .MuiDataGrid-columnHeaderTitle": {
                    fontWeight: 600,
                    color: "#374151",
                  },
                  "& .MuiDataGrid-row:nth-of-type(odd)": {
                    backgroundColor: "#fafafa",
                  },
                  "& .MuiDataGrid-row:hover": {
                    backgroundColor: "#e3f2fd",
                  },
                  "& .MuiDataGrid-cell": {
                    borderBottom: "1px solid #f0f0f0",
                  },
                }}
              />
            </div>
          </Grid>
        </>
      )}
    </>
  );
};

export default CustomersPage;
