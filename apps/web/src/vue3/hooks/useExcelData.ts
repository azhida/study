import { computed, } from "vue";
import { ref } from "vue";
import * as XLSX from 'xlsx';
import axios from "axios";

const query: any = ref({
  pageNum: 1,
  pageSize: 10
});

const allData: any = ref([]);
const total = ref(0);
const columns: any = ref([]);

// 分页数据
const data: any = computed(() => {
  const start = (query.value.pageNum - 1) * query.value.pageSize;
  const end = start + query.value.pageSize;
  return allData.value.slice(start, end);
});

export function useExcelData(excelPath: string = '') {

  // 拿 Excel 文件数据
  function getExcelData(excelPath1: string = '') {

    readExcel(excelPath1 || excelPath).then((res: any) => {

      allData.value = res;
      total.value = res.length;

      let columns_temp: any = [];
      if (res.length > 0) {
        for (var i in res[0]) {
          columns_temp.push({
            prop: i,
            label: i,
            width: 'auto',
            align: 'center',
          })
        }
      }
      columns.value = columns_temp;
    })
  }

  // 设置查询条件
  function setSearchForm(searchForm: any = {}) {
    query.value = { ...query.value, ...searchForm };
  }

  // 读 excel 文件数据
  function readExcel(filePath) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: filePath, // 本地Excel文件路径
        responseType: 'arraybuffer' // 重要：设置响应类型为arraybuffer以接收二进制数据
      }).then(response => {
        // 将ArrayBuffer转换为Buffer
        const data = new Uint8Array(response.data);
        const arr = new Array();
        for (let i = 0; i < data.length; i++) {
          arr.push(data[i]);
        }
        const wb = XLSX.read(btoa(arr.reduce((a, b) => a + String.fromCharCode(b), '')), { type: 'base64' });
        const firstSheetName = wb.SheetNames[0];
        const worksheet = wb.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        resolve(jsonData)
      }).catch(error => {
        reject(error)
      });
    })
  }

  return { total, columns, data, readExcel, getExcelData, setSearchForm }
}
