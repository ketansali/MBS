//get API Params
const COMMON = {
     getTableParams : (params) => {
        return {
          pageNo: params.pagination?.current ? params.pagination?.current : 1,
          searchValue: params?.target?.value ? params.target.value : "",
          length: params.pagination?.pageSize ? params.pagination?.pageSize : 10,
          sortColumn: params?.columnKey ? params?.columnKey : "",
          sortOrder: params?.order ? params?.order : "",
        };
      },
      convertToBase64 : (img, callback) =>{
        const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
        
      }
};
export default COMMON


