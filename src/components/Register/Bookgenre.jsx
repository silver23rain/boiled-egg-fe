import React, { Component, Fragment } from 'react';
import styled from "styled-components";

class Bookgenre extends Component {
    constructor(props){
        super(props);
        this.state={
            categoryDate: [
                {}
            ]
        }
    }
    render() {
        const category = ['소설','시/에세이','경제경영','자기계발','인문','역사/문화'
    ,'정치/사회','건강/의학','교재/수험서','IT/프로그래밍','과학/공학','예술/대중문화'
    ,'종교','가정/생활/요리','여행/취미','매거진','아동','유아','e 오디오북','북모닝CEO'
    ,'외국도서','국어/외국어','청소년교양'
    ];
        const categorylist = category.map(
        (category) => (<Category style={{color:'#000000'}}><Input type="checkbox"/>{category}</Category>)
        );
        console.log(categorylist);

        return (
            <Fragment>
                <BackgroudBox/>
                <form onSubmit={this.onSubmit}>
                    <FormCheck>
                        <Label>
                            {categorylist}
                        </Label>
                    </FormCheck>
                </form>
                <MultiSelect>복수선택가능</MultiSelect>
            </Fragment>
        );
    }
}
const Category = styled.div`
`;
const Input = styled.input`
    
`;
const Label = styled.label`
    width: 50px;
    height: 30px;
    font-size: 26px;
    color: #000000;
 
`;
const FormCheck = styled.div`
    width:190px;
    position:absolute;
    top: 319px;
    left: 675px;
    z-index:3;
    display: inline-block;
    height: 100%;
    line-height: 43px;
  
    ${Category}:nth-child(8){
            
            position:absolute;
            top:0px;
            left: 200px;
           

    }
    ${Category}:nth-child(n+9):nth-child(-n+16){
        left:200px;
        display: inline-block;
        height: 100%;
        line-height: 43px;
    }
    ${Category}:nth-child(n+16){
        
        position:absolute;
        top:0px;
        left: 400px;
        height:100%;
        display: inline-block;
        ${Category}:nth-child(n+17){
            position:absolute;
            left:400px;
            display: inline-block;
            height: 100%;
            line-height: 43px;
        }

}

`;
const BackgroudBox = styled.div`
    width:1048px;
    height: 716px;
    position: absolute;
    background-color: #fffbeb;
    top: 233px;
    left: 486px;
    z-index:2;
`;
const MultiSelect = styled.div`
    width: 118px;
    font-size:20px;
    position: absolute;
    color: #707070;
    top: 965px;
    left: 1416px;
    z-index:2;
`;

export default Bookgenre;