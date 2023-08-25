import axios from 'axios';
async function readUser(getData) {
    let data;
    await axios({
        method: "post",
        url: '/read-chamber',
        data: {
            col: getData.col,
            id: getData.id,
        }
    }).then(res => {
        data = res.data;
    })
    return data
}
export default readUser;
