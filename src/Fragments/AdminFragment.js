import { Container, StepConnector } from "@material-ui/core";
import  React, { Component } from 'react';
import { Link } from 'react-router-dom'
import MaterialTable from "material-table";
import { forwardRef } from 'react';
import useParams from "react-router-dom";
import { adminFragment } from '../Components/Actions/AdminAction';

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
import { connect } from "react-redux";
import AdminAction from '../Components/Actions/AdminAction';
import { getNutrition, addNutrition } from '../Components/Actions/AdminAction'
import { firestore } from "../firebase";


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

class AdminFragment extends Component{
    
   constructor(props){
        super(props);
        
        this.state = {
          columns:[
            {title: "Name", field: "name"},
            { title: "Qty(g)", field: "qty", type: "numeric" },
            { title: "Protiens(g)", field: "protein", type: "numeric" },
            { title: "Carbs(g)", field: "carbs", type: "numeric"},
            { title: "Fats(g)", field: "fat", type: "numeric"},
            {title: "Calories(kcal)", field: "calories", type: "numeric"},
          ],
          //data: props.nutrition,
      
         
          data: [{ name: 'Cooked Rice', qty:100, protein: 2, carbs: 28, fat: 0, calories: 130 },
          { name: 'Chapati', protein: 7, qty:100, carbs: 38, fat: 2, calories: 192},
          { name: 'Buttermilk Bread',qty:100, protein: 10, carbs: 48, fat: 3, calories: 267},
          { name: 'Can Chicken',qty:100, protein: 25, carbs: 0, fat: 8, calories: 185 },
          { name: 'Boiled Egg',qty:100, protein: 12, carbs: 1, fat: 10, calories: 155 },
          { name: 'Ice Cream',qty:100, protein: 3, carbs: 23, fat: 11, calories: 207},
          { name: 'Cheese',qty:100, protein: 24, carbs: 1, fat: 38, calories: 406},
        { name: 'Cooked Rice',qty:100, protein: 2, carbs: 28, fat: 0, calories: 130 },]
        }
      };
    componentDidMount(){
      if(this.props.nutrition===null){
        this.props.getNutrition();
      }
    }
    
    render() {
      /*console.log(this.props)
      if(!this.props.data)
        return <> loading...</>*/

      return (
      <div>
      <Container maxWidth="md" fixed>
      <MaterialTable
      icons={tableIcons}
      title="Nutrition"
      columns={this.state.columns}
      data={this.state.data}

      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve();
                this.setState((prevState)=>{
                  const data = [...prevState.data];
                  //data[data.indexOf(oldData)] = newData;
                  data.push(newData);
                  return { ...prevState, data};
                });
            }, 600)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve();
              if(oldData){
                this.setState((prevState)=>{
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data};
                });
              }

              resolve();
            }, 600)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve();
                this.setState((prevState)=>{
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data};
                });
              resolve()
            }, 600);
          }) 
   
      }}/>
         </Container>
          </div>
        )
    }
}

const mapStateToProps = (state) =>{
  return{
    nutrition: state.nutrition,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    getNutrition:(data,onSuccess, onError)=>
       dispatch(addNutrition(data,onSuccess, onError))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminFragment);
