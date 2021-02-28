import React from 'react';
import { Input, Row, Col } from 'antd';


const { Search } = Input;

const SearchBox = ({ searchHandler, defaultValue, setPage, setCurrentPage, setActiveLink }) => {
    return (
        <Row id="searchbox-container">
            <Col id="searchbox" span={12}>
                <Search
                    placeholder="enter movie, series, episode name"
                    enterButton="Search"
                    size="large"
                    defaultValue={defaultValue}
                    onSearch={value => { searchHandler(value); setPage(1); setCurrentPage(1); setActiveLink(1); }} />
            </Col>
        </Row>
    )
};

export { SearchBox };