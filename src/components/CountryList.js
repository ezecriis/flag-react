import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Country from './Country';
import { useSelector, useDispatch } from 'react-redux';

const CountryListStyled = styled.div`
    display: grid;
    grid-row-gap: 2.3em;
    background: var(--background);
    justify-content: center;
    border: 1px solid red;
    padding: 4em 2em;
`

function CountryList() {
    const dispatch = useDispatch()
    const countryList = useSelector((state) => state.countryList)
    console.log(countryList);

    // const [countryList, setCountryList] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then((response) => {
                return response.json();
            })
            .then((list) => {
                dispatch({
                    type: 'SET_COUNTRY_LIST',
                    payload: list
                })
                // setCountryList(data);
                console.log(list.length);
            })
            .catch(() => {
                console.log('error');
            })
    }, [dispatch])
    return (
        <CountryListStyled>
            {
                countryList.map(({ name, flag, population, region, capital }) => {
                    return (
                        <Country
                            flag={flag}
                            name={name}
                            key={name}
                            pupulation={population}
                            region={region}
                            capital={capital}
                        />
                    )
                })
            }
        </CountryListStyled>
    );
}

export default CountryList;
