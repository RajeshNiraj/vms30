import { React, useEffect, useState} from "react";
import MaterialTable from 'material-table';
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

//import {AgGridReact} from 'ag-grid-react';
//import 'ag-grid-community/dist/styles/ag-grid.css';
//import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
//import { useSelector } from "react-redux";
import { connect } from "react-redux";
//import { setCurrentUser } from "../../redux/user/user-actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user-selectors";
import { Link } from "react-router-dom";

import "./homepage-styles.scss";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const HomePage = ({ currentUser }) => {

    // const [tableData,setTableData] = useState([
    //     { name: "Mohammad", email: "Faisal", Phone: 1995, age: 48,gender:"male", city:"Bangalore" }
    // ]);

const data = [
  { name: "Mohammad", email: "Faisal", phone: 1995, age: 48,gender:"male", city:"Bangalore" },
  { name: "Mohammad1", email: "Faisal1", phone: 19951, age: 38,gender:"female", city:"Bangalore1" }
];

//setTableData(data);

    const columns= [
        {title:"Name",field:"name"},
        {title:"Email",field:"email"},
        {title:"Phone Number",field:"phone"},
        {title:"Age",field:"age"},
        {title:"Gender",field:"gender"},
        {title:"City",field:"city"},
    ]

    const defaultColDef = {
        sortable:true, filter:true
    }

    //const currentUser = useSelector(setCurrentUser);
    console.log(currentUser.uname);
   return(
    <div>
        <div className="header zone sticky">
            <div className="container-icon">
                
            {currentUser.uname}
            
            </div>
            <div className="main-nav" id="navi-list">
                <Link className="list-item" to="/networkpage">
                    Network Manager
                </Link>
                <Link className="list-item" to="/reportpage">
                    Report Viewer
                </Link>
                <Link className="list-item" to="/userpage">
                    User Manager
                </Link>  
            </div>
            <div >
                <Link className="logout" to="/logout">
                    Log Out
                </Link> 
            </div>  
        </div>

        <div className="grid">
            <MaterialTable icons={tableIcons} 
                data={data} columns={columns}
                defaultColDef={defaultColDef}
                
            />
        </div>

    </div>

   )
}

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser
})

export default connect(mapStateToProps)(HomePage);