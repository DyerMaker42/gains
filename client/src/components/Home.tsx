import React from 'react';
import { useHomeData } from '../hooks/useHomeData';
import { Progress } from 'antd';
import { IMax } from '../types/maxRepsType';
import { Title } from './Title';
import '../styles/home.scss'

//color code chagnes weeklyc ircle color based on total reps by day
const colorCode = (sum:number):"success"|"normal"|"exception"|"active" => {
  let status:"success"|"normal"|"exception"|"active" = "success";
  if (sum > 80) {
    status = "success"
  } else if (sum < 80 && sum > 0) {
    status = "normal"
  }
  else if (sum < 1) {
    status = "exception"
  }
return status;
}
// cuts off year from date 
const sliceDate = (date:string):string => {
  let result = date.split("").slice(5, 10).join("");
  return result;
}
//getting highest, not current max squat
const getOneRepMaxSquat = (currentProgress:IMax[]) => {
  let oneRepMax = 0;
  currentProgress.forEach((element, index, array) => {
    if (element["3"] > oneRepMax) {
      oneRepMax = element["3"];
    }
  })
  return oneRepMax;
}
//same for RDL
const getOneRepMaxRDL = (currentProgress:IMax[]) => {
  let oneRepMax = 0;
  currentProgress.forEach((element, index, array) => {
    if (element["4"] > oneRepMax) {
      oneRepMax = element["4"];
    }
  })
  return oneRepMax;
}
//dame for bench, currently hardcoded, wil be updated
const getOneRepMaxBench = (currentProgress:IMax[]) => {
  let oneRepMax = 0;
  currentProgress.forEach((element, index, array) => {
    if (element["6"] > oneRepMax) {
      oneRepMax = element["6"];
    }
  })
  return oneRepMax;
}
// returns current three lift sum
const thousandPoundClub = (num1:number, num2:number, num3:number) => {
  let result = num1 + num2 + num3;
  return result;
}
//potential area of refactor, push max reps of goal to array, then map over arraywith function, great for MVD
// next four convert max rep to pecentage based on hard coded goal, once we are able to input goals will modify accordingly
const bpConverter = (num:number) => {
  let result = Math.round(num / 240 * 100);
  return result;
}

const bsConverter = (num:number) => {
  let result = Math.round(num / 325 * 100);
  return result;
}

const rdlConverter = (num:number) => {
  let result = Math.round(num / 435 * 100);
  return result;
}


const tPCConverter = (num:number) => {
  let result = Math.round(num / 10);
  return result;
}
export const Home = ():React.ReactElement => {
  const {allDays, currentProgress} = useHomeData();

  return(
    <>
    <Title text={'WELCOME GAINS'} />
    <div className='outter-container'>
    <div className='circle-container'>
      {allDays.map((day:any) => (
      <Progress 
        type="circle" 
        percent={day["sum"]} 
        width={40} status='normal' 
        format={() => `${sliceDate(day.workout_date)}`} 
        strokeColor={{
          '0%': '#1990FF',
          '100%': '#9E5DFF',
        }}
        strokeWidth={12}
      />
      ))}
    </div>
    <div className='statistic-container'>
      <div className='amount-container'>
        <span className='amount'>188</span>
        <span>Total Exercises</span>
      </div>
      <div className='amount-container'>
        <span className='amount'>10 Days</span>
        <span>You Have Joined Us</span>
      </div>
    </div>
    <div className='progress-bar-container'>
      <span className='title'>Goal: One Rep Max</span>
      {/* all goals currely hardcoded */}
      {/* go over wording as number represent current pr,not what currently lifting */}
      <div className='progress-bar'>
      <h3>Bench Press Currently lifting/Goal: {getOneRepMaxBench(currentProgress)}/240</h3>
      <Progress 
        percent={bpConverter(getOneRepMaxBench(currentProgress))} 
        status="active" 
        strokeColor={{
          '0%': '#1990FF',
          '100%': '#9E5DFF',
        }}
      />
      </div>
      <div className='progress-bar'>
      <h3>Back Squat Currently lifting/Goal: {getOneRepMaxSquat(currentProgress)}/315</h3>
      <Progress 
        percent={bsConverter(getOneRepMaxSquat(currentProgress))} 
        status="active" 
        strokeColor={{
          '0%': '#1990FF',
          '100%': '#9E5DFF',
        }}
      /> 
     </div>
     <div className='progress-bar'>
      <h3>RDL Currently lifting/Goal: {getOneRepMaxRDL(currentProgress)}/410</h3>
      <Progress 
        percent={rdlConverter(getOneRepMaxRDL(currentProgress))} 
        status="active" 
        strokeColor={{
          '0%': '#1990FF',
          '100%': '#9E5DFF',
        }}
      />
      </div>
       <div className='progress-bar'>
      <h3>1000 lb Club (Currently lifting: {thousandPoundClub(getOneRepMaxBench(currentProgress),getOneRepMaxSquat(currentProgress),getOneRepMaxRDL(currentProgress))} )</h3>
      <Progress 
        percent={tPCConverter(thousandPoundClub(getOneRepMaxBench(currentProgress),getOneRepMaxSquat(currentProgress),getOneRepMaxRDL(currentProgress)))} 
        status="active"
        strokeColor={{
          '0%': '#1990FF',
          '100%': '#9E5DFF',
        }}
      /> 
      </div>
    </div> 
    </div>
    </>
  )
}