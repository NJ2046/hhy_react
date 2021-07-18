import React from 'react';
import ReactDOM from 'react';
import { DatePicker, Button, Select } from 'antd';
import Grid from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AHeader from '../../components/aHeader';
import ANav from '../../components/aNav';
import UFooter from '../../components/uFooter';
import 'antd/dist/antd.css';



const { Option } = Select;
function onChange(date, dateString) {
    console.log(date, dateString);
}

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

const APay =()=> {
    // const history = useHistory();
    // ID,author,date,time,location,content
    const price = '$23/30m';
    const total = '$20';

    return (
        <>
            <AHeader />
            <ANav show={[1,0,0]}/>

            <Grid>
                <Row className="show-grid">
                    <Col sm={3} md={5}>
                        <h4>Price: <span className="label label-default">{price}</span></h4>
                        <h4>Select Date</h4><DatePicker onChange={onChange} />
                        <h4>Start Time</h4><DatePicker onChange={onChange} picker="time" />
                        <h4>End Time</h4><DatePicker onChange={onChange} picker="time" />
                        <div>
                        <Button type="primary">Confirm</Button>
                        </div>
                    </Col>
                    <Col sm={3} md={5}>
                        <h4>Total: <span className="label label-default">{total}</span></h4>
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
                            <Option value="visa">Visa</Option>
                            <Option value="master">Master</Option>
                        </Select>
                        <h4>First Name</h4><input/>
                        <h4>Last Name</h4><input/>
                        <h4>Card Number</h4><input/>
                        <h4>CVV</h4><input/>
                        <h4>MM/YY</h4><input/>
                        <div>
                            <Button type="primary">Pay Now</Button>
                        </div>
                    </Col>
                </Row>
            </Grid>

            <UFooter />
        </>
    );
}

//ReactDOM.render(gridInstance, mountNode);
export default APay;
