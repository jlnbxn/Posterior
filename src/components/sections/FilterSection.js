import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import Breadcrumbs from '../Elements/Breadcrumbs'
import Filter from '../Elements/Filter/Filter'
import Wrapper from '../Elements/Wrapper'

const Root = styled.section`
    background-color: #f4f2f1;
`

function FilterSection() {
    return (
        <Root>
            <Wrapper wide>
                <Breadcrumbs />

                <Filter />
            </Wrapper >
        </Root>
    )
}

export default FilterSection
