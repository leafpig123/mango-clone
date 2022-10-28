import React, {useState} from "react";
import styled from "styled-components";
import {HiOutlineMagnifyingGlass} from "react-icons/hi2";

const Bar = styled.form`
  margin: 0;
  height: 60px;
  
  input {
    width: 415px;
    height: 50px;
    font-size: 1.1rem;
  }
  
  svg{
    vertical-align: middle;
  }
`;

function SearchBar() {
    return (
        <Bar>
            <HiOutlineMagnifyingGlass size={"40"} color={"grey"}/>
            <input
                type="string"
                placeholder="지역, 식당 또는 음식"
            />
        </Bar>
    );
}

export default SearchBar;