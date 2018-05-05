from tkinter import *

ww = Tk()

def cok():
	exit()

wl = Label(ww, text = "Just Monika", bg = "pink", fg = "white")
button0 = Button(ww, text = "OK", bg = "pink", fg = "White", command = cok)

wl.pack(side=TOP, fill = X)
button0.pack(side=BOTTOM, fill = X)

ww.mainloop()