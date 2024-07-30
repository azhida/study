# Importing all the classes from the PyQt5.QtGui module.
from PyQt5.QtGui import *

# Importing all the classes from the PyQt5.QtCore module.
from PyQt5.QtCore import *

# Importing all the classes from the PyQt5.QtWidgets module.
from PyQt5.QtWidgets import *

# Importing the `fitz` module.
import fitz

# Importing the PyPDF2 module.
import PyPDF2

# Importing the `sys` module.
import sys

# Importing the os module.
import os

# Importing the traceback module.
import traceback


# This class is a widget that contains a button and a text box. When the button is clicked, the text box is populated with
# the path to the converted file
class PdfToPngUI(QWidget):
    def __init__(self):
        """
        A constructor. It is called when an object is created from a class and it allows the class to initialize the
        attributes of a class.
        """
        super(PdfToPngUI, self).__init__()
        self.init_ui()

    def init_ui(self):
        """
        This function initializes the UI.
        """
        self.setWindowTitle('PDF图片转换工具 公众号：Python 集中营')
        self.setWindowIcon(QIcon('analysis.ico'))
        self.resize(600, 400)

        self.source_pdf_path = QLineEdit()
        self.source_pdf_path.setPlaceholderText('PDF文件路径')
        self.source_pdf_path.setReadOnly(True)

        self.source_pdf_btn = QPushButton()
        self.source_pdf_btn.setText('导入')
        self.source_pdf_btn.clicked.connect(self.source_pdf_btn_click)

        self.target_png_path = QLineEdit()
        self.target_png_path.setPlaceholderText('目标图片存储路径')
        self.target_png_path.setReadOnly(True)

        self.target_png_btn = QPushButton()
        self.target_png_btn.setText('路径')
        self.target_png_btn.clicked.connect(self.target_png_btn_click)

        self.start_btn = QPushButton()
        self.start_btn.setText('PDF一键生成PNG图片')
        self.start_btn.clicked.connect(self.start_btn_click)

        self.brower = QTextBrowser()
        self.brower.setReadOnly(True)
        self.brower.setFont(QFont('宋体', 8))
        self.brower.setPlaceholderText('日志处理过程区域...')
        self.brower.ensureCursorVisible()

        grid = QGridLayout()
        grid.addWidget(self.source_pdf_path, 0, 0, 1, 2)
        grid.addWidget(self.source_pdf_btn, 0, 2, 1, 1)
        grid.addWidget(self.target_png_path, 1, 0, 1, 2)
        grid.addWidget(self.target_png_btn, 1, 2, 1, 1)
        grid.addWidget(self.start_btn, 2, 0, 1, 3)
        grid.addWidget(self.brower, 3, 0, 1, 3)

        self.pdf_thread = WorkThread(self)
        self.pdf_thread.message.connect(self.show_message)
        self.pdf_thread.finished.connect(self.finished)

        self.setLayout(grid)

    def show_message(self, text):
        """
        It shows a message

        :param text: The text to be displayed
        """
        cursor = self.brower.textCursor()
        cursor.movePosition(QTextCursor.End)
        self.brower.append(text)
        self.brower.setTextCursor(cursor)
        self.brower.ensureCursorVisible()

    def source_pdf_btn_click(self):
        """
        It opens a file dialog box to select the source PDF file.
        """
        source_pdf_path = QFileDialog.getOpenFileName(self, "选取文件", os.getcwd(), "PDF File (*.pdf)")
        self.source_pdf_path.setText(source_pdf_path[0])

    def target_png_btn_click(self):
        """
        A function that is called when the target_png_btn is clicked.
        """
        target_png_path = QFileDialog.getExistingDirectory(self, '选择文件夹', os.getcwd())
        self.target_png_path.setText(target_png_path)

    def start_btn_click(self):
        """
        A function that is called when the start button is clicked.
        """
        self.pdf_thread.start()
        self.start_btn.setEnabled(False)

    def finished(self, finished):
        """
        A function that is called when the target_png_btn is clicked
        """
        if finished is True:
            self.start_btn.setEnabled(True)


# It's a QThread that runs a function in a separate thread
class WorkThread(QThread):
    message = pyqtSignal(str)
    finished = pyqtSignal(bool)

    def __init__(self, parent=None):
        """
        A constructor that initializes the class.

        :param parent: The parent widget
        """
        super(WorkThread, self).__init__(parent)
        self.working = True
        self.parent = parent

    def __del__(self):
        """
        A destructor. It is called when the object is destroyed.
        """
        self.working = False

    def run(self):
        """
        PDF转换图片的业务函数。
        """
        try:
            source_pdf_path = self.parent.source_pdf_path.text().strip()
            target_png_path = self.parent.target_png_path.text().strip()
            if source_pdf_path == '' or target_png_path == '':
                self.message.emit('来源文件路径或目标存储路径不能为空！')
                self.finished.emit(True)
                return

            self.message.emit('源文件路径：{}'.format(source_pdf_path))
            self.message.emit('目标文件路径：{}'.format(target_png_path))

            pdf_ = fitz.open(source_pdf_path)
            self.message.emit('成功打开PDF文件对象！')
            reader = PyPDF2.PdfReader(source_pdf_path)
            self.message.emit('PDF文件流处理完成！')
            page_num = len(reader.pages)
            self.message.emit('PDF文件页数读取完成！')

            for n in range(0, page_num):
                page = pdf_.load_page(n)
                pix_ = page.get_pixmap()
                pix_.save(os.path.join(target_png_path, str(n) + '.png'))
                self.message.emit('图片保存成功：{}'.format(os.path.join(target_png_path, str(n) + '.png')))
            self.message.emit('PNG图片全部转换完成！')
            self.finished.emit(True)
        except:
            traceback.print_exc()
            self.message.emit('程序运行出现错误，请检查参数是否设置正确！')
            self.finished.emit(True)


if __name__ == '__main__':
    app = QApplication(sys.argv)
    main = PdfToPngUI()
    main.show()
    sys.exit(app.exec_())