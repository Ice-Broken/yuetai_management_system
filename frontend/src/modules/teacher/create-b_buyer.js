import axios from "axios";
import { v4 } from "uuid";
async function createBBuyer(getData) {
  let data;
  await axios({
    method: "post",
    url: "/create-b_buyer",
    data: {
    // id: 'ytb_' + `${+new Date()}`, 
      bbuyer_name_ch: getData.bbuyer_name_ch,
      bbuyer_name_en: getData.bbuyer_name_en,
      address: getData.address,
      fax: getData.fax,
      contact_name: getData.contact_name,
      position: getData.position,
      tel: getData.tel,
      email: getData.email,
      remark: getData.remark,
    //   time: getData.time,
    },
  }).then(res => {
    data = res.data;
  });
  return data;
}
export default createBBuyer;