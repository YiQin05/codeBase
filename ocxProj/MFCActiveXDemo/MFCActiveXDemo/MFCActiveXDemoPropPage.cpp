// MFCActiveXDemoPropPage.cpp : CMFCActiveXDemoPropPage 属性页类的实现。

#include "stdafx.h"
#include "MFCActiveXDemo.h"
#include "MFCActiveXDemoPropPage.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#endif

IMPLEMENT_DYNCREATE(CMFCActiveXDemoPropPage, COlePropertyPage)

// 消息映射

BEGIN_MESSAGE_MAP(CMFCActiveXDemoPropPage, COlePropertyPage)
END_MESSAGE_MAP()

// 初始化类工厂和 guid

IMPLEMENT_OLECREATE_EX(CMFCActiveXDemoPropPage, "MFCACTIVEXCONT.MFCActiveXDemoPropPage.1",
	0xc9b52b28,0xe693,0x4bde,0x98,0xb0,0x75,0xc5,0xd2,0xa9,0xcf,0xe7)

// CMFCActiveXDemoPropPage::CMFCActiveXDemoPropPageFactory::UpdateRegistry -
// 添加或移除 CMFCActiveXDemoPropPage 的系统注册表项

BOOL CMFCActiveXDemoPropPage::CMFCActiveXDemoPropPageFactory::UpdateRegistry(BOOL bRegister)
{
	if (bRegister)
		return AfxOleRegisterPropertyPageClass(AfxGetInstanceHandle(),
			m_clsid, IDS_MFCACTIVEXDEMO_PPG);
	else
		return AfxOleUnregisterClass(m_clsid, nullptr);
}

// CMFCActiveXDemoPropPage::CMFCActiveXDemoPropPage - 构造函数

CMFCActiveXDemoPropPage::CMFCActiveXDemoPropPage() :
	COlePropertyPage(IDD, IDS_MFCACTIVEXDEMO_PPG_CAPTION)
{
}

// CMFCActiveXDemoPropPage::DoDataExchange - 在页和属性间移动数据

void CMFCActiveXDemoPropPage::DoDataExchange(CDataExchange* pDX)
{
	DDP_PostProcessing(pDX);
}

// CMFCActiveXDemoPropPage 消息处理程序
