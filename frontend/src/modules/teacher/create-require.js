import axios from "axios";
import { v4 } from "uuid";
async function createRequire(getData) {
  let data;
  await axios({
    method: "post",
    url: "/create-require",
    data: {
      id: 'yt_' + `${+new Date()}`, 
      name: getData.name,
      sex: getData.sex,
      subject: getData.subject,
      time:  getData.time,
      company_name_ch: getData.company_name_ch,
      company_name_en: getData.company_name_en,
      contact_name: getData.contact_name,
      tel: getData.tel,
      email: getData.email,
      prodcts: getData.prodcts,
      amount: getData.amount,
      require: getData.require,
      link: getData.link,
      date: getData.date,
    },
  }).then(res => {
    data = res.data;
  });
  return data;
}
export default createRequire;
