import requests
import json
import os

save_path = './jsons'
if os.path.exists(save_path) == False:
    os.makedirs(save_path)


def getData_district(code, name):
    url = f'https://geo.datav.aliyun.com/areas_v3/bound/{code}_full.json'
    headers = {'Content-Type': 'application/json'}
    res = requests.get(url, headers=headers)
    print(res.status_code)
    if res.status_code != 200:
        return []
        
    # 追加写入内容到文件
    filename = f"{save_path}/{code}-{name}.json"
    with open(filename, "a", encoding="utf-8") as file:
        file.write(res.text)

    res = json.loads(res.text)
    return res['features']


def getData_city(code, name):
    url = f'https://geo.datav.aliyun.com/areas_v3/bound/{code}_full.json'
    headers = {'Content-Type': 'application/json'}
    res = requests.get(url, headers=headers)
    print(res.status_code)
    if res.status_code != 200:
        return []
        
    # 追加写入内容到文件
    filename = f"{save_path}/{code}-{name}.json"
    with open(filename, "a", encoding="utf-8") as file:
        file.write(res.text)

    res = json.loads(res.text)
    return res['features']


def getData_province(code, name):
    url = f'https://geo.datav.aliyun.com/areas_v3/bound/{code}_full.json'
    headers = {'Content-Type': 'application/json'}
    res = requests.get(url, headers=headers)
    

    # 追加写入内容到文件
    filename = f"{save_path}/{code}-{name}.json"
    with open(filename, "a", encoding="utf-8") as file:
        file.write(res.text)

    res = json.loads(res.text)

    all_data = {'type': 'FeatureCollection', 'features': []}
    features_arr = []
    for i in res['features']:
        city_features = getData_city(i['properties']['adcode'], i['properties']['name'])
        for j in city_features:
            print(j['properties']['name'])
            features_arr.append(j)
            if j['properties']['name'] == '南宁市':
                district_features = getData_district(j['properties']['adcode'], j['properties']['name'])
                for m in district_features:
                    print(m['properties']['name'])
                    features_arr.append(m)

    
    all_data['features'] = features_arr

    filename = f"{save_path}/China.json"
    with open(filename, "a", encoding="utf-8") as file:
        file.write(json.dumps(all_data))

    
    
# 代码
code = '100000' # 全国

getData_province(code, '全国')