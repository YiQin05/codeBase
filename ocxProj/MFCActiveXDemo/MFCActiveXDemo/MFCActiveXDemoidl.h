

/* this ALWAYS GENERATED file contains the definitions for the interfaces */


 /* File created by MIDL compiler version 8.01.0622 */
/* at Tue Jan 19 11:14:07 2038
 */
/* Compiler settings for MFCActiveXDemo.idl:
    Oicf, W1, Zp8, env=Win32 (32b run), target_arch=X86 8.01.0622 
    protocol : dce , ms_ext, c_ext, robust
    error checks: allocation ref bounds_check enum stub_data 
    VC __declspec() decoration level: 
         __declspec(uuid()), __declspec(selectany), __declspec(novtable)
         DECLSPEC_UUID(), MIDL_INTERFACE()
*/
/* @@MIDL_FILE_HEADING(  ) */



/* verify that the <rpcndr.h> version is high enough to compile this file*/
#ifndef __REQUIRED_RPCNDR_H_VERSION__
#define __REQUIRED_RPCNDR_H_VERSION__ 500
#endif

#include "rpc.h"
#include "rpcndr.h"

#ifndef __RPCNDR_H_VERSION__
#error this stub requires an updated version of <rpcndr.h>
#endif /* __RPCNDR_H_VERSION__ */


#ifndef __MFCActiveXDemoidl_h__
#define __MFCActiveXDemoidl_h__

#if defined(_MSC_VER) && (_MSC_VER >= 1020)
#pragma once
#endif

/* Forward Declarations */ 

#ifndef ___DMFCActiveXDemo_FWD_DEFINED__
#define ___DMFCActiveXDemo_FWD_DEFINED__
typedef interface _DMFCActiveXDemo _DMFCActiveXDemo;

#endif 	/* ___DMFCActiveXDemo_FWD_DEFINED__ */


#ifndef ___DMFCActiveXDemoEvents_FWD_DEFINED__
#define ___DMFCActiveXDemoEvents_FWD_DEFINED__
typedef interface _DMFCActiveXDemoEvents _DMFCActiveXDemoEvents;

#endif 	/* ___DMFCActiveXDemoEvents_FWD_DEFINED__ */


#ifndef __MFCActiveXDemo_FWD_DEFINED__
#define __MFCActiveXDemo_FWD_DEFINED__

#ifdef __cplusplus
typedef class MFCActiveXDemo MFCActiveXDemo;
#else
typedef struct MFCActiveXDemo MFCActiveXDemo;
#endif /* __cplusplus */

#endif 	/* __MFCActiveXDemo_FWD_DEFINED__ */


#ifdef __cplusplus
extern "C"{
#endif 


/* interface __MIDL_itf_MFCActiveXDemo_0000_0000 */
/* [local] */ 

#pragma warning(push)
#pragma warning(disable:4001) 
#pragma once
#pragma warning(push)
#pragma warning(disable:4001) 
#pragma once
#pragma warning(pop)
#pragma warning(pop)
#pragma region Desktop Family
#pragma endregion


extern RPC_IF_HANDLE __MIDL_itf_MFCActiveXDemo_0000_0000_v0_0_c_ifspec;
extern RPC_IF_HANDLE __MIDL_itf_MFCActiveXDemo_0000_0000_v0_0_s_ifspec;


#ifndef __MFCActiveXDemoLib_LIBRARY_DEFINED__
#define __MFCActiveXDemoLib_LIBRARY_DEFINED__

/* library MFCActiveXDemoLib */
/* [control][version][uuid] */ 


EXTERN_C const IID LIBID_MFCActiveXDemoLib;

#ifndef ___DMFCActiveXDemo_DISPINTERFACE_DEFINED__
#define ___DMFCActiveXDemo_DISPINTERFACE_DEFINED__

/* dispinterface _DMFCActiveXDemo */
/* [uuid] */ 


EXTERN_C const IID DIID__DMFCActiveXDemo;

#if defined(__cplusplus) && !defined(CINTERFACE)

    MIDL_INTERFACE("eff65b1d-9853-4c92-8997-0a2c998b0104")
    _DMFCActiveXDemo : public IDispatch
    {
    };
    
#else 	/* C style interface */

    typedef struct _DMFCActiveXDemoVtbl
    {
        BEGIN_INTERFACE
        
        HRESULT ( STDMETHODCALLTYPE *QueryInterface )( 
            _DMFCActiveXDemo * This,
            /* [in] */ REFIID riid,
            /* [annotation][iid_is][out] */ 
            _COM_Outptr_  void **ppvObject);
        
        ULONG ( STDMETHODCALLTYPE *AddRef )( 
            _DMFCActiveXDemo * This);
        
        ULONG ( STDMETHODCALLTYPE *Release )( 
            _DMFCActiveXDemo * This);
        
        HRESULT ( STDMETHODCALLTYPE *GetTypeInfoCount )( 
            _DMFCActiveXDemo * This,
            /* [out] */ UINT *pctinfo);
        
        HRESULT ( STDMETHODCALLTYPE *GetTypeInfo )( 
            _DMFCActiveXDemo * This,
            /* [in] */ UINT iTInfo,
            /* [in] */ LCID lcid,
            /* [out] */ ITypeInfo **ppTInfo);
        
        HRESULT ( STDMETHODCALLTYPE *GetIDsOfNames )( 
            _DMFCActiveXDemo * This,
            /* [in] */ REFIID riid,
            /* [size_is][in] */ LPOLESTR *rgszNames,
            /* [range][in] */ UINT cNames,
            /* [in] */ LCID lcid,
            /* [size_is][out] */ DISPID *rgDispId);
        
        /* [local] */ HRESULT ( STDMETHODCALLTYPE *Invoke )( 
            _DMFCActiveXDemo * This,
            /* [annotation][in] */ 
            _In_  DISPID dispIdMember,
            /* [annotation][in] */ 
            _In_  REFIID riid,
            /* [annotation][in] */ 
            _In_  LCID lcid,
            /* [annotation][in] */ 
            _In_  WORD wFlags,
            /* [annotation][out][in] */ 
            _In_  DISPPARAMS *pDispParams,
            /* [annotation][out] */ 
            _Out_opt_  VARIANT *pVarResult,
            /* [annotation][out] */ 
            _Out_opt_  EXCEPINFO *pExcepInfo,
            /* [annotation][out] */ 
            _Out_opt_  UINT *puArgErr);
        
        END_INTERFACE
    } _DMFCActiveXDemoVtbl;

    interface _DMFCActiveXDemo
    {
        CONST_VTBL struct _DMFCActiveXDemoVtbl *lpVtbl;
    };

    

#ifdef COBJMACROS


#define _DMFCActiveXDemo_QueryInterface(This,riid,ppvObject)	\
    ( (This)->lpVtbl -> QueryInterface(This,riid,ppvObject) ) 

#define _DMFCActiveXDemo_AddRef(This)	\
    ( (This)->lpVtbl -> AddRef(This) ) 

#define _DMFCActiveXDemo_Release(This)	\
    ( (This)->lpVtbl -> Release(This) ) 


#define _DMFCActiveXDemo_GetTypeInfoCount(This,pctinfo)	\
    ( (This)->lpVtbl -> GetTypeInfoCount(This,pctinfo) ) 

#define _DMFCActiveXDemo_GetTypeInfo(This,iTInfo,lcid,ppTInfo)	\
    ( (This)->lpVtbl -> GetTypeInfo(This,iTInfo,lcid,ppTInfo) ) 

#define _DMFCActiveXDemo_GetIDsOfNames(This,riid,rgszNames,cNames,lcid,rgDispId)	\
    ( (This)->lpVtbl -> GetIDsOfNames(This,riid,rgszNames,cNames,lcid,rgDispId) ) 

#define _DMFCActiveXDemo_Invoke(This,dispIdMember,riid,lcid,wFlags,pDispParams,pVarResult,pExcepInfo,puArgErr)	\
    ( (This)->lpVtbl -> Invoke(This,dispIdMember,riid,lcid,wFlags,pDispParams,pVarResult,pExcepInfo,puArgErr) ) 

#endif /* COBJMACROS */


#endif 	/* C style interface */


#endif 	/* ___DMFCActiveXDemo_DISPINTERFACE_DEFINED__ */


#ifndef ___DMFCActiveXDemoEvents_DISPINTERFACE_DEFINED__
#define ___DMFCActiveXDemoEvents_DISPINTERFACE_DEFINED__

/* dispinterface _DMFCActiveXDemoEvents */
/* [uuid] */ 


EXTERN_C const IID DIID__DMFCActiveXDemoEvents;

#if defined(__cplusplus) && !defined(CINTERFACE)

    MIDL_INTERFACE("a189b913-dab3-423a-bdec-74db8b202d59")
    _DMFCActiveXDemoEvents : public IDispatch
    {
    };
    
#else 	/* C style interface */

    typedef struct _DMFCActiveXDemoEventsVtbl
    {
        BEGIN_INTERFACE
        
        HRESULT ( STDMETHODCALLTYPE *QueryInterface )( 
            _DMFCActiveXDemoEvents * This,
            /* [in] */ REFIID riid,
            /* [annotation][iid_is][out] */ 
            _COM_Outptr_  void **ppvObject);
        
        ULONG ( STDMETHODCALLTYPE *AddRef )( 
            _DMFCActiveXDemoEvents * This);
        
        ULONG ( STDMETHODCALLTYPE *Release )( 
            _DMFCActiveXDemoEvents * This);
        
        HRESULT ( STDMETHODCALLTYPE *GetTypeInfoCount )( 
            _DMFCActiveXDemoEvents * This,
            /* [out] */ UINT *pctinfo);
        
        HRESULT ( STDMETHODCALLTYPE *GetTypeInfo )( 
            _DMFCActiveXDemoEvents * This,
            /* [in] */ UINT iTInfo,
            /* [in] */ LCID lcid,
            /* [out] */ ITypeInfo **ppTInfo);
        
        HRESULT ( STDMETHODCALLTYPE *GetIDsOfNames )( 
            _DMFCActiveXDemoEvents * This,
            /* [in] */ REFIID riid,
            /* [size_is][in] */ LPOLESTR *rgszNames,
            /* [range][in] */ UINT cNames,
            /* [in] */ LCID lcid,
            /* [size_is][out] */ DISPID *rgDispId);
        
        /* [local] */ HRESULT ( STDMETHODCALLTYPE *Invoke )( 
            _DMFCActiveXDemoEvents * This,
            /* [annotation][in] */ 
            _In_  DISPID dispIdMember,
            /* [annotation][in] */ 
            _In_  REFIID riid,
            /* [annotation][in] */ 
            _In_  LCID lcid,
            /* [annotation][in] */ 
            _In_  WORD wFlags,
            /* [annotation][out][in] */ 
            _In_  DISPPARAMS *pDispParams,
            /* [annotation][out] */ 
            _Out_opt_  VARIANT *pVarResult,
            /* [annotation][out] */ 
            _Out_opt_  EXCEPINFO *pExcepInfo,
            /* [annotation][out] */ 
            _Out_opt_  UINT *puArgErr);
        
        END_INTERFACE
    } _DMFCActiveXDemoEventsVtbl;

    interface _DMFCActiveXDemoEvents
    {
        CONST_VTBL struct _DMFCActiveXDemoEventsVtbl *lpVtbl;
    };

    

#ifdef COBJMACROS


#define _DMFCActiveXDemoEvents_QueryInterface(This,riid,ppvObject)	\
    ( (This)->lpVtbl -> QueryInterface(This,riid,ppvObject) ) 

#define _DMFCActiveXDemoEvents_AddRef(This)	\
    ( (This)->lpVtbl -> AddRef(This) ) 

#define _DMFCActiveXDemoEvents_Release(This)	\
    ( (This)->lpVtbl -> Release(This) ) 


#define _DMFCActiveXDemoEvents_GetTypeInfoCount(This,pctinfo)	\
    ( (This)->lpVtbl -> GetTypeInfoCount(This,pctinfo) ) 

#define _DMFCActiveXDemoEvents_GetTypeInfo(This,iTInfo,lcid,ppTInfo)	\
    ( (This)->lpVtbl -> GetTypeInfo(This,iTInfo,lcid,ppTInfo) ) 

#define _DMFCActiveXDemoEvents_GetIDsOfNames(This,riid,rgszNames,cNames,lcid,rgDispId)	\
    ( (This)->lpVtbl -> GetIDsOfNames(This,riid,rgszNames,cNames,lcid,rgDispId) ) 

#define _DMFCActiveXDemoEvents_Invoke(This,dispIdMember,riid,lcid,wFlags,pDispParams,pVarResult,pExcepInfo,puArgErr)	\
    ( (This)->lpVtbl -> Invoke(This,dispIdMember,riid,lcid,wFlags,pDispParams,pVarResult,pExcepInfo,puArgErr) ) 

#endif /* COBJMACROS */


#endif 	/* C style interface */


#endif 	/* ___DMFCActiveXDemoEvents_DISPINTERFACE_DEFINED__ */


EXTERN_C const CLSID CLSID_MFCActiveXDemo;

#ifdef __cplusplus

class DECLSPEC_UUID("d1992727-e1d9-490b-8c1e-298e69d63cb4")
MFCActiveXDemo;
#endif
#endif /* __MFCActiveXDemoLib_LIBRARY_DEFINED__ */

/* Additional Prototypes for ALL interfaces */

/* end of Additional Prototypes */

#ifdef __cplusplus
}
#endif

#endif


