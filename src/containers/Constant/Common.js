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
      convertToBase64 : (image) =>{
        const render = new FileReader();
       return render.readAsDataURL(image);
        
      }
};
export default COMMON


