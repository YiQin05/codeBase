// MFCActiveXDemoCtrl.cpp : CMFCActiveXDemoCtrl ActiveX 控件类的实现。

#include "stdafx.h"
#include "MFCActiveXDemo.h"
#include "MFCActiveXDemoCtrl.h"
#include "MFCActiveXDemoPropPage.h"
#include "afxdialogex.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#endif

IMPLEMENT_DYNCREATE(CMFCActiveXDemoCtrl, COleControl)

// 消息映射

BEGIN_MESSAGE_MAP(CMFCActiveXDemoCtrl, COleControl)
	ON_OLEVERB(AFX_IDS_VERB_PROPERTIES, OnProperties)
END_MESSAGE_MAP()

// 调度映射

BEGIN_DISPATCH_MAP(CMFCActiveXDemoCtrl, COleControl)
	DISP_FUNCTION_ID(CMFCActiveXDemoCtrl, "AboutBox", DISPID_ABOUTBOX, AboutBox, VT_EMPTY, VTS_NONE)
END_DISPATCH_MAP()

// 事件映射

BEGIN_EVENT_MAP(CMFCActiveXDemoCtrl, COleControl)
	EVENT_CUSTOM_ID("OnSend", eventidOnSend, FileOnSend, VTS_BSTR)
END_EVENT_MAP()

// 属性页

// TODO: 根据需要添加更多属性页。请记住增加计数!
BEGIN_PROPPAGEIDS(CMFCActiveXDemoCtrl, 1)
	PROPPAGEID(CMFCActiveXDemoPropPage::guid)
END_PROPPAGEIDS(CMFCActiveXDemoCtrl)

// 初始化类工厂和 guid

IMPLEMENT_OLECREATE_EX(CMFCActiveXDemoCtrl, "MFCACTIVEXCONTRO.MFCActiveXDemoCtrl.1",
	0xd1992727,0xe1d9,0x490b,0x8c,0x1e,0x29,0x8e,0x69,0xd6,0x3c,0xb4)

// 键入库 ID 和版本

IMPLEMENT_OLETYPELIB(CMFCActiveXDemoCtrl, _tlid, _wVerMajor, _wVerMinor)

// 接口 ID

const IID IID_DMFCActiveXDemo = {0xeff65b1d,0x9853,0x4c92,{0x89,0x97,0x0a,0x2c,0x99,0x8b,0x01,0x04}};
const IID IID_DMFCActiveXDemoEvents = {0xa189b913,0xdab3,0x423a,{0xbd,0xec,0x74,0xdb,0x8b,0x20,0x2d,0x59}};

// 控件类型信息

static const DWORD _dwMFCActiveXDemoOleMisc =
	OLEMISC_ACTIVATEWHENVISIBLE |
	OLEMISC_SETCLIENTSITEFIRST |
	OLEMISC_INSIDEOUT |
	OLEMISC_CANTLINKINSIDE |
	OLEMISC_RECOMPOSEONRESIZE;

IMPLEMENT_OLECTLTYPE(CMFCActiveXDemoCtrl, IDS_MFCACTIVEXDEMO, _dwMFCActiveXDemoOleMisc)

// CMFCActiveXDemoCtrl::CMFCActiveXDemoCtrlFactory::UpdateRegistry -
// 添加或移除 CMFCActiveXDemoCtrl 的系统注册表项

BOOL CMFCActiveXDemoCtrl::CMFCActiveXDemoCtrlFactory::UpdateRegistry(BOOL bRegister)
{
	// TODO:  验证您的控件是否符合单元模型线程处理规则。
	// 有关更多信息，请参考 MFC 技术说明 64。
	// 如果您的控件不符合单元模型规则，则
	// 必须修改如下代码，将第六个参数从
	// afxRegApartmentThreading 改为 0。

	if (bRegister)
		return AfxOleRegisterControlClass(
			AfxGetInstanceHandle(),
			m_clsid,
			m_lpszProgID,
			IDS_MFCACTIVEXDEMO,
			IDB_MFCACTIVEXDEMO,
			afxRegApartmentThreading,
			_dwMFCActiveXDemoOleMisc,
			_tlid,
			_wVerMajor,
			_wVerMinor);
	else
		return AfxOleUnregisterClass(m_clsid, m_lpszProgID);
}


// CMFCActiveXDemoCtrl::CMFCActiveXDemoCtrl - 构造函数

CMFCActiveXDemoCtrl::CMFCActiveXDemoCtrl()
{
	InitializeIIDs(&IID_DMFCActiveXDemo, &IID_DMFCActiveXDemoEvents);
	// TODO:  在此初始化控件的实例数据。
}

// CMFCActiveXDemoCtrl::~CMFCActiveXDemoCtrl - 析构函数

CMFCActiveXDemoCtrl::~CMFCActiveXDemoCtrl()
{
	// TODO:  在此清理控件的实例数据。
}

// CMFCActiveXDemoCtrl::OnDraw - 绘图函数

void CMFCActiveXDemoCtrl::OnDraw(
			CDC* pdc, const CRect& rcBounds, const CRect& /* rcInvalid */)
{
	if (!pdc)
		return;

	// TODO:  用您自己的绘图代码替换下面的代码。
	pdc->FillRect(rcBounds, CBrush::FromHandle((HBRUSH)GetStockObject(WHITE_BRUSH)));
	pdc->Ellipse(rcBounds);
}

// CMFCActiveXDemoCtrl::DoPropExchange - 持久性支持

void CMFCActiveXDemoCtrl::DoPropExchange(CPropExchange* pPX)
{
	ExchangeVersion(pPX, MAKELONG(_wVerMinor, _wVerMajor));
	COleControl::DoPropExchange(pPX);

	// TODO: 为每个持久的自定义属性调用 PX_ 函数。
}


// CMFCActiveXDemoCtrl::OnResetState - 将控件重置为默认状态

void CMFCActiveXDemoCtrl::OnResetState()
{
	COleControl::OnResetState();  // 重置 DoPropExchange 中找到的默认值

	// TODO:  在此重置任意其他控件状态。
}


// CMFCActiveXDemoCtrl::AboutBox - 向用户显示“关于”框

void CMFCActiveXDemoCtrl::AboutBox()
{
	CDialogEx dlgAbout(IDD_ABOUTBOX_MFCACTIVEXDEMO);
	dlgAbout.DoModal();
}


// CMFCActiveXDemoCtrl 消息处理程序


void CMFCActiveXDemoCtrl::Start()
{
	// TODO: 在此处添加实现代码.
	AFX_MANAGE_STATE(AfxGetStaticModuleState());
	SYSTEMTIME sys;
	ShowCurrentTime();
	FireOnSend(m_strTime);
}

void CMFCActiveXDemoCtrl::ShowCurrentTime(void)
{
	SYSTEMTIME sys;
	CString cstrTime_A, cstrTime_B, cstrTime_C;
	GetLocalTime(&sys)
		if (m_TimeStyle == 0) {
			m_strTime.Format(_T("%4d年%d月%d日%d时%d分%d秒"), sys.wYear, sys.wMonth, sys.wDay, sys.wHour, sys.wMinute, sys.wSecond);
		}
		else if (m_TimeStyle == 1) {
			m_strTime.Format(_T("%4d-%d-%d %d:%d:%d"), sys.wYear, sys.wMonth, sys.wDay, sys.wHour, sys.wMinute, sys.wSecond);
		}
		else if (m_TimeStyle == 2) {
			m_strTime.Format(_T("%4d/%d/%d %d:%d:%d"), sys.wYear, sys.wMonth, sys.wDay, sys.wHour, sys.wMinute, sys.wSecond);
		}
	MessageBox(m_strTime);
}