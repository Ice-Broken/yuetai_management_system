import axios from "axios";
import { v4 } from "uuid";
async function createBuyer(getData) {
  let data;
  await axios({
    method: "post",
    url: "/create-buyer",
    data: {
      // id: 'yta_' + `${+new Date()}`, 
      company_name_ch: getData.company_name_ch,
      company_name_en: getData.company_name_en,
      subject: getData.subject,
      source: getData.source,
      contact_name: getData.contact_name,
      position: getData.position,
      tel: getData.tel,
      email: getData.email,
      remark: getData.remark,
      name: getData.name,
    },
  }).then(res => {
    data = res.data;
  });
  return data;
}
export default createBuyer;
