import axios from "axios";
import { v4 } from "uuid";
async function createActivity(getData) {
  let data;
  await axios({
    method: "post",
    url: "/create-activity",
    data: {
      id: 'yta_' + `${+new Date()}`, 
      name: getData.name,
      head_name: getData.head_name,
      sex: getData.sex,
      company_name_ch: getData.company_name_ch,
      supply_company_name: getData.supply_company_name,
      prodcts: getData.prodcts,
      contact_method: getData.contact_method,
      dtm: getData.dtm,
    },
  }).then(res => {
    data = res.data;
  });
  return data;
}
export default createActivity;
