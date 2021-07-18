import React from 'react';
import AHeader from '../components/aHeader';
import ANav from '../components/aNav';
import UFooter from '../components/uFooter';
import AAuthorCard from '../components/aauthorCard'
import 'antd/dist/antd.css';
import {Table, Tag, Space, Select} from 'antd';
import Col from "react-bootstrap/Col";


const { Option } = Select;

function onSearch(val) {
    console.log('search:', val);
}

function onsChange(value) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

const CResult =()=> {
    // const history = useHistory();
    const Q = [
        {index:'1123123',title:'how to run react ?',content:'Run the React Application. Now you are ready to run your first real React application! Run this command to move to the myfirstreact directory: C:Users Your Name >cd myfirstreact. Run this command to run the React application myfirstreact: C:Users Your Name myfirstreact>npm start. A new browser window will pop up with your newly created React ...'},
        {index:'1123123',title:'how to run react ?',content:'Run the React Application. Now you are ready to run your first real React application! Run this command to move to the myfirstreact directory: C:Users Your Name >cd myfirstreact. Run this command to run the React application myfirstreact: C:Users Your Name myfirstreact>npm start. A new browser window will pop up with your newly created React ...'},
        {index:'1123123',title:'how to run react ?',content:'Run the React Application. Now you are ready to run your first real React application! Run this command to move to the myfirstreact directory: C:Users Your Name >cd myfirstreact. Run this command to run the React application myfirstreact: C:Users Your Name myfirstreact>npm start. A new browser window will pop up with your newly created React ...'},
        {index:'1123123',title:'how to run react ?',content:'Run the React Application. Now you are ready to run your first real React application! Run this command to move to the myfirstreact directory: C:Users Your Name >cd myfirstreact. Run this command to run the React application myfirstreact: C:Users Your Name myfirstreact>npm start. A new browser window will pop up with your newly created React ...'},
        {index:'1123123',title:'how to run react ?',content:'Run the React Application. Now you are ready to run your first real React application! Run this command to move to the myfirstreact directory: C:Users Your Name >cd myfirstreact. Run this command to run the React application myfirstreact: C:Users Your Name myfirstreact>npm start. A new browser window will pop up with your newly created React ...'},
        {index:'1123123',title:'how to run react ?',content:'Run the React Application. Now you are ready to run your first real React application! Run this command to move to the myfirstreact directory: C:Users Your Name >cd myfirstreact. Run this command to run the React application myfirstreact: C:Users Your Name myfirstreact>npm start. A new browser window will pop up with your newly created React ...'},
        {index:'1123123',title:'how to run react ?',content:'Run the React Application. Now you are ready to run your first real React application! Run this command to move to the myfirstreact directory: C:Users Your Name >cd myfirstreact. Run this command to run the React application myfirstreact: C:Users Your Name myfirstreact>npm start. A new browser window will pop up with your newly created React ...'},
    ];
    const columns = [
        {
            title: 'Index',
            dataIndex: 'index',
            key: 'index',
        },
        {
            title: 'QuestionTitle',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Content',
            dataIndex: 'content',
            key: 'content',
        },
    ];

    return (
        <>
            <AHeader />
            <ANav show={[1,0,0]}/>
            <div class="container">
                <h4>Sorted By: </h4>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a pay method"
                    optionFilterProp="children"
                    onChange={onsChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="time">time</Option>
                    <Option value="NOL">number of likes</Option>
                    <Option value="NOC">number of collections</Option>
                    <Option value="relevance">relevance</Option>
                </Select>
                {/* List all experts */}
                <Table columns={columns} dataSource={Q} />
            </div>
            <UFooter />
        </>
    );
}

export default CResult;
