# lodash 对象深拷贝

[官网](https://www.lodashjs.com/)

```
npm nstall lodash
```

Home.vue
```
<script>
import _ from 'lodash'

export default {
    data(){
        return {
            addFormObj: {
                a: 1,
                b: 2
            }
        }
    },
    method: {
        fn(){
            const form = _.cloneDeep(this.addFormObj)
        }
    }
}

</script>
```
