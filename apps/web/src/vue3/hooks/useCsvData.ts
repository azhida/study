import { computed, } from "vue";
import { ref } from "vue";
import { csv } from 'd3-request';

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

export function useRightTable(csvPath: string = '') {

  // 拿 csv 文件数据
  function getCsvData(csvPath1: string = '') {
    readCsv(csvPath1 || csvPath).then((res: any) => {
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

  // 读 csv 文件数据
  function readCsv(filePath) {
    return new Promise((resolve, reject) => {
      csv(filePath, (error, data) => {
        // if (error) throw error;
        if (error) {
          reject(error)
        }
        resolve(data)
      })
    })
  }

  return { total, columns, data, readCsv, getCsvData, setSearchForm }
}
