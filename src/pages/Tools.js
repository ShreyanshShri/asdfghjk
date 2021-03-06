import React, {useState} from 'react'

import BmiCalculator from '../components/tools/BmiCalculator'
import CalorieCalculator from '../components/tools/CalorieCalculator'
import WaistHipRatio from '../components/tools/WaistHipRatio'

import MetaTags from '../components/MetaTags'

const Tools = () => {

    const [page, switchpage] = useState('bmi')

    const ulStyles={
        display: 'flex',
        padding: '0',
        flexWrap: 'wrap'
    }
    const liStyles={
        marginRight: '10px',
        listStyleType: 'none',
        padding: '10px',
        cursor: 'pointer',
    }

    return (
        <div>
            <MetaTags 
                title='Health++ - Tools'
                description='A complete solution to all your health problems'
                keywords='motivation, health, fitness, yoga, bmi'
                url='https://yoururl.com'
                imageurl='source.unsplash.com/random'
                type='page'
            />
            <div className='container'>
                <ul style={ulStyles}>
                    <li onClick={() => switchpage('bmi')} style={{...liStyles, background:  page==='bmi' && '#eee'}}>BMI Calculator</li>
                    <li onClick={() => switchpage('calorie')} style={{...liStyles, background:  page==='calorie' && '#eee'}}>Calorie Calculator</li>
                    <li onClick={() => switchpage('waist-hip')} style={{...liStyles, background:  page==='waist-hip' && '#eee'}}>Calorie Calculator</li>
                </ul>
            </div>
            {
                page === 'bmi' ? <BmiCalculator /> :
                page === 'calorie' ? <CalorieCalculator /> :
                <WaistHipRatio />
            }
        </div>
    )
}

export default Tools
