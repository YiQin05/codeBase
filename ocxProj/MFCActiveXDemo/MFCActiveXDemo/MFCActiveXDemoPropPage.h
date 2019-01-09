#pragma once

// MFCActiveXDemoPropPage.h: CMFCActiveXDemoPropPage 属性页类的声明。


// CMFCActiveXDemoPropPage : 请参阅 MFCActiveXDemoPropPage.cpp 了解实现。

class CMFCActiveXDemoPropPage : public COlePropertyPage
{
	DECLARE_DYNCREATE(CMFCActiveXDemoPropPage)
	DECLARE_OLECREATE_EX(CMFCActiveXDemoPropPage)

// 构造函数
public:
	CMFCActiveXDemoPropPage();

// 对话框数据
	enum { IDD = IDD_PROPPAGE_MFCACTIVEXDEMO };

// 实现
protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV 支持

// 消息映射
protected:
	DECLARE_MESSAGE_MAP()
};

