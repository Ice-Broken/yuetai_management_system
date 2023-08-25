import axios from "axios";
import { v4 } from "uuid";
async function createChamber(getData) {
  let data;
  await axios({
    method: "post",
    url: "/create-chamber",
    data: {
    // id: 'ytb_' + `${+new Date()}`, 
      chamber_name_ch: getData.chamber_name_ch,
      chamber_name_en: getData.chamber_name_en,
      address: getData.address,
      fax: getData.fax,
      contact_name: getData.contact_name,
      position: getData.position,
      tel: getData.tel,
      email: getData.email,
      remark: getData.remark,
    // time: getData.time,
    },
  }).then(res => {
    data = res.data;
  });
  return data;
}
export default createChamber;