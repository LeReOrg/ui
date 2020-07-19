import React, { useState } from 'react';
import FormField from '../../../utils/FormField';
import {update} from '../../../utils/FormAction';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'
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
    }
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
    return (
        <div className="search-body">
            <div className="search-contain">
                <div className="search-title"><p>Bạn đang cần thuê gì nhỉ?</p></div>
                <div className="search-input-body">
                    <div className="search-input">
                        <FormField id={'search'} formData={search.searchData.search} change ={(element) => updateSearch(element)}  />
                    </div>
                    <div onClick={searchKeyWord} className="search-btn">
                        <div className="search-icon"><FontAwesomeIcon icon={faSearch} className="icon" /></div>
                        <div className="search-icon-title"><p>Tim kiếm</p></div>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Search;