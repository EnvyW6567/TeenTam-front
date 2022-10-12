// 점심, 저녁 정보 가져오기. 나중에 하드코딩된 부분 고쳐야 함(교육청코드, 학교코드 받아서 하는 걸로)
export const getSchoolLunch = async () => {
    const data = {};
    const todayString = getTodayString();
    
    const lunchUrl = `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${process.env.REACT_APP_SCHOOL_API_KEY}&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=J10&SD_SCHUL_CODE=7531379&MMEAL_SC_CODE=2&MLSV_YMD=${todayString}`;
    const dinnerUrl = `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${process.env.REACT_APP_SCHOOL_API_KEY}&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=J10&SD_SCHUL_CODE=7531379&MMEAL_SC_CODE=3&MLSV_YMD=${todayString}`;
    
    const lunchRes = await fetch(lunchUrl);
    const dinnerRes = await fetch(dinnerUrl);

    if(lunchRes.ok){
        const lunchJson = await lunchRes.json();
        if(!("RESULT" in lunchJson)){
            const lunchList = lunchJson.mealServiceDietInfo[1].row[0].DDISH_NM;
            const lunch = parseString(lunchList);
            data.lunch = lunch;
        }
    }

    if(dinnerRes.ok){
        const dinnerJson = await dinnerRes.json();
        if(!("RESULT" in dinnerJson)){
            const dinnerList = dinnerJson.mealServiceDietInfo[1].row[0].DDISH_NM;
            const dinner = parseString(dinnerList);
            data.dinner = dinner;
        }
    }

    return data;
}

const getTodayString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = ("0" + (1 + today.getMonth())).slice(-2);
    const day = ("0" + today.getDate()).slice(-2);
  
    return year + month + day;  
}

const parseString = (s) => {
    const midResult = s.split("<br/>");
    const result = midResult.map(r => r.split("  ")[0]);

    return result;
}