#pragma once

// MFCActiveXDemoCtrl.h : CMFCActiveXDemoCtrl ActiveX 控件类的声明。


// CMFCActiveXDemoCtrl : 请参阅 MFCActiveXDemoCtrl.cpp 了解实现。

class CMFCActiveXDemoCtrl : public COleControl
{
	DECLARE_DYNCREATE(CMFCActiveXDemoCtrl)

// 构造函数
public:
	CMFCActiveXDemoCtrl();

// 重写
public:
	virtual void OnDraw(CDC* pdc, const CRect& rcBounds, const CRect& rcInvalid);
	virtual void DoPropExchange(CPropExchange* pPX);
	virtual void OnResetState();

// 实现
protected:
	~CMFCActiveXDemoCtrl();

	DECLARE_OLECREATE_EX(CMFCActiveXDemoCtrl)    // 类工厂和 guid
	DECLARE_OLETYPELIB(CMFCActiveXDemoCtrl)      // GetTypeInfo
	DECLARE_PROPPAGEIDS(CMFCActiveXDemoCtrl)     // 属性页 ID
	DECLARE_OLECTLTYPE(CMFCActiveXDemoCtrl)		// 类型名称和杂项状态

// 消息映射
	DECLARE_MESSAGE_MAP()

// 调度映射
	DECLARE_DISPATCH_MAP()

	afx_msg void AboutBox();

// 事件映射
	DECLARE_EVENT_MAP()

// 调度和事件 ID
public:
	enum {
		eventidOnSend = 1L
	};
	// 测试的属性
	long TimeStyle;
	void Start();
	void ShowCurrentTime(void);
protected:

	void FileOnSend(LPCTSTR lpstrTime)
	{
		FireEvent(eventidOnSend, EVENT_PARAM(VTS_BSTR), lpstrTime);
	}
};

