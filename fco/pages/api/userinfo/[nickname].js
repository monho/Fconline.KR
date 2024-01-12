// pages/api/id/[nickname].js

export default async function handler(req, res) {
    const { nickname } = req.query;
    
    try {
      const apiKey = 'live_e9335a6787866a3cc9067b9336d410d990c9f534532c7e04c6befe7059effef88169d67a8bd1347bc78b3ec9d1a5419d'; // 여기에 Nexon API 키를 넣어주세요
      const apiUrl = `https://open.api.nexon.com/fconline/v1/id?nickname=${nickname}`;
  
      const response = await fetch(apiUrl, {
        headers: {
          'x-nxopen-api-key': apiKey,
          'Content-Type': 'application/json', // API가 JSON 응답을 기대하는 경우에만 필요
          // 다른 헤더가 필요한 경우 여기에 추가
        },
      });
  
      const data = await response.json();
    
      res.status(200).json(data);
    } catch (error) {
      console.error('데이터를 불러오는 중 오류 발생:', error);
      res.status(500).json({ error: '데이터를 불러오는 중 오류 발생' });
    }
  }