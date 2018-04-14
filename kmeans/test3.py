import cv2
import numpy as np
from PIL import Image
from scipy.ndimage import filters
from PIL import Image


def salt(img, n):

    for k in range(n):
        i = int(np.random.random() * img.shape[1]);
        j = int(np.random.random() * img.shape[0]);
        if img.ndim == 2:
            img[j, i] = 255
        elif img.ndim == 3:
            img[j, i, 0] = 255
            img[j, i, 1] = 255
            img[j, i, 2] = 255
    return img
# 孔洞填充
def cvFillHoles(img):
    """
    # assume input is uint8 B & W(0 or 1)
    # this function imitates imfill(image, 'hole')
    """
    holes = img.copy()
    cv2.floodFill(holes,None, (0,0), 1) # 找到洞孔
    for i in range(img.shape[0]):
        for j in range(img.shape[1]):
            if holes[i,j]==0:
                img[i,j]=255
    cv2.imshow("kongdong",img)
    return img

def fanhong(img):
    diff = (6, 6, 6)
    mask = np.zeros(img.shape[0] + 2, img.shape[1] + 2)
    cv2.floodFill(img, mask, (10, 10), (255, 255, 0), diff, diff)
    cv2.imshow("fanhong", img)

    # 二值形态学运算
def morphology(img):
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (3, 3)) # 构建矩阵
    iOpen = cv2.morphologyEx(img, cv2.MORPH_OPEN, kernel)  # 开运算
    iClose = cv2.morphologyEx(iOpen, cv2.MORPH_CLOSE, kernel) # 闭运算
    cv2.imshow('Open->Close', iClose)


# 轮廓图
def contours(img):
    # 找到轮廓
    _, contours, hierarchy = cv2.findContours(img, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
    # 绘制轮廓
    cv2.drawContours(img, contours, -1, (0, 0, 255), 3)
    # 绘制结果
    cv2.imshow("contours", img)

img = cv2.imread("TEST.tif",cv2.IMREAD_GRAYSCALE)
print(img)
img_copy=img.copy()

# #用3*3的中值滤波器
# step=3
# def m_filter(x,y):
#     sum_s=[]
#     for k in range(-int(step/2),int(step/2)+1):
#         for m in  range(-int(step/2),int(step/2)+1):
#             sum_s.append(img[x+k][y+m])
#     print(sum_s)
#     return sum_s[(int(step*step/2)+1)]
#
# for i in range(int(step/2),img.shape[0]-int(step/2)):
#     for j in range(int(step/2),img.shape[1]-int(step/2)):
#         img_copy[i][j]=m_filter(i,j)
#
cv2.imshow(img_copy, cmap = 'gray')

# result = salt(img, 500)

# median = cv2.medianBlur(result, 5)

# cv2.imshow("Median-befor", median)
#
# mean = np.mean(median)
# median = median - mean
# median = median * 2.5 + mean * 0.7  # 修对比度和亮度
# median = median / 255.
#
# morphology(median)
#
# cv2.imshow("Median-after", median)
#
# cv2.waitKey(0)
