# -*- coding: utf-8 -*-

import requests
r = requests.get('http://ident.me')
ip = r.text
print(ip)
