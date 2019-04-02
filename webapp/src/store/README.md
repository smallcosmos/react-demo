# Redux 代码流程

1. 创建action  
2. 创建reducer  
3. 通过redux createStorer接口以及reducers初始化stete数据生成store  
4. 通过react-redux Provider提供者提供组件访问store的能力  
5. 编写显示组件  
6. 编写容器组件  
7. 容器组件内创建读取state到props函数【mapStateToProps】  
8. 容器组件需要支持dispatch action, 因为需要提供能注入具有dispatch功能的回调【mapDispatchToProps】）  
9. 通过react-redux connect生成容器组件  
10. 【7、8、9步容器组件的创建可以自己编写，通过store.subscript订阅，并在回调中通过store getState获取state再传递给显示组件】不建议