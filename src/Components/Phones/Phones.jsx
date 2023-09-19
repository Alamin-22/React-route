import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { useEffect, useState } from "react";
import { RotatingLines } from 'react-loader-spinner';

const Phones = () => {

    const [phones, setPhones] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
        //     .then(res => res.json())
        //     .then(data => setPhones(data.data))
        axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split("-")[1])
                    }
                    return obj
                })
                console.log(phonesWithFakeData);
                setPhones(phonesWithFakeData);
                setLoader(false)
            })
    }, [])
    console.log(phones)

    return (
        <div>

            {loader && <div>
                <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                />
            </div>}

            <h1 className="text-5xl text-center text-white">Phones: {phones.length}</h1>
            <div>
                <BarChart width={1200} height={500} data={phones}>
                    <Bar dataKey="price" stroke="white" fill="skyblue"></Bar>
                    <XAxis dataKey={"name"}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
            </div>
        </div>
    );
};

export default Phones;