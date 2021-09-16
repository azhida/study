#-*- coding:UTF-8 -*-
url = 'https://okjx.cc/?url='
import sys

import webbrowser

sys.path.append("libs")

##修改链接
urls = "https://www.iqiyi.com/v_19rrol0698.html#vfrm=19-9-0-1"
urls = "https://www.iqiyi.com/v_vezj96gc5s.html?vfrm=rank_list&vfrmblk=channel.-1&vfrmrst=1#curid=3132156824091900_73b933e8d50886d572666dac109ea1ac"
print(url+urls)

webbrowser.open(url+urls)

print(webbrowser.get())