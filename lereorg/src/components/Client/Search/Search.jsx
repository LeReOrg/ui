import React, { useState } from 'react';
import FormField from '../../../utils/FormField';
import {update} from '../../../utils/FormAction';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from '@material-ui/core/styles';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import { Grid } from '@material-ui/core';

const Search = () => {
    const searchInfos = {
        searchError : false,
        searchSuccess : false, 
        searchData : {
            search :{
                element : 'input',
                value : "",
                config: {
                    name : "search_input",
                    type : "text",
                    placeholder : "Ba lô, lều trại, camera, Go Pro,..."
                },
                validation : {
                    required : true,
                },
                valid : false,
                touched : false,
                validationMessage : '',
            }
            
        
        }
    };
     const useStyles = makeStyles((theme) => ({
        search_body : {
            position: "absolute",
            top: "55%",
            width : "100%",
            fontSize : "56px",
            fontWeight : "bold",
            fontStyle : "normal",
            display : "flex",
            alignItems : "center",
            letterSpacing : "-0.01em",
            color : "#FFF",
            [theme.breakpoints.down("xs")] :{
                fontSize : "24px",
                left : 0,
                top : "42%"
            }
        },search_contain:{
           width : "100%",
            textAlign: "center",
            [theme.breakpoints.down("xs")] : {

            }
        },
        search_title :{
            paddingBottom : "36px",
            [theme.breakpoints.down("xs")] : {
                paddingBottom : "16px"
            }
        },
        search_input_body : {
            margin : "0 auto"
        },
        search_input : {
            fontSize : "16px",
            lineHeight : "22px",
            borderRadius : "8px",
        },
        search_btn : {
            display : "flex",
            backgroundColor : "#2FAF62",
            borderRadius : "8px",
            padding : "17px 18px",
            fontSize : "16px",
            '&:hover' : {
                cursor: "pointer"
            },
            [theme.breakpoints.down("xs")] : {
                justifyContent : "center"
            }
           
        },
        search_icon :{
            paddingRight : "10px"
        },
        search_icon_title :{}
     }))
    const [search,setSearch] = useState(searchInfos);
    const updateSearch = async (element) => {
        const newFormData = update(element,search.searchData,'search');
        const newFormData_Input = {
            searchError : false, 
            searchData : newFormData
        }
        await setSearch(newFormData_Input)
    }
    const searchKeyWord = () => {
        alert('search')
    }
    const classes = useStyles();
    return (
     <div className={classes.search_body}>
        <Grid  className={classes.search_contain} container>
            <Grid item xs={12} md={12}>
                <div className={classes.search_title}><p>Bạn đang cần thuê gì nhỉ?</p></div>
            </Grid>
          
            <Grid container lg={6} spacing={2} className={classes.search_input_body}  >
                <Grid item xs = {12} lg={9}>
                    <div className={classes.search_input}>
                            <FormField id={'search'} formData={search.searchData.search} change ={(element) => updateSearch(element)}  />
                    </div>
                </Grid>
                <Grid item xs = {12} lg={3}>
                        <div onClick={searchKeyWord} className={classes.search_btn}>
                            <div className={classes.search_icon}><FontAwesomeIcon icon={faSearch} className="icon" /></div>
                            <div className={classes.search_icon_title}><p>Tim kiếm</p></div>
                        </div>
                </Grid>
            </Grid>
            
        </Grid>
        </div>
    );
};

export default Search;