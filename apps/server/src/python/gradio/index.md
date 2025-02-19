# Gradio 

## 简介

`Gradio` 是一个Python库，用于构建快速的Web界面，以便于使用机器学习模型进行实时演示和交互。使用 `Gradio` ，您可以轻松地将机器学习模型封装为交互式应用程序，无需编写任何前端代码。

## 安装

```sh
pip install gradio
```

## 使用

使用Gradio创建了一个简单的应用程序，将输入文本进行反转并返回结果。在启动应用程序时，您还添加了共享选项和身份验证。

- demo.py

```py
import gradio as gr
def reverse(text):
    return text[::-1]
demo = gr.Interface(reverse, "text", "text")
demo.launch(share=True, auth=("username", "password"))
```