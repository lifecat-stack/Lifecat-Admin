from skimage import io
im=io.imread('TEST2.jpg')
#io.imshow(im)
for i in range(0,im.shape[0]):
    for j in range(0,im.shape[1]):
        im_copy=im.copy()
#用3*3的中值滤波器
step=3
def m_filter(x,y):
    sum_s=[]
    for k in range(-int(step/2),int(step/2)+1):
        for m in  range(-int(step/2),int(step/2)+1):
            sum_s.append(im[x+k][y+m])
    sum_s.sort()
    return sum_s[(int(step*step/2)+1)]

for i in range(int(step/2),im.shape[0]-int(step/2)):
    for j in range(int(step/2),im.shape[1]-int(step/2)):
        im_copy[i][j]=m_filter(i,j)

io.imshow(im_copy)