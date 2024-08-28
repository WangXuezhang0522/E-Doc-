# E-Doc-虚拟医生小程序
## 介绍
e-doc小程序是一款基于大语言模型的辅助疾病预测与健康管理工具。包含智能问诊、心理支持、疾病科普和健康管理等模块.
## 效果图
<img height="200" src="https://github.com/WangXuezhang0522/image/blob/main/%E5%9B%BE%E5%BA%8A/%E5%9B%BE%E7%89%877.png?raw=true"><img height="200" src="https://github.com/WangXuezhang0522/image/blob/main/%E5%9B%BE%E5%BA%8A/%E5%9B%BE%E7%89%878.png?raw=true"><img height="200" src="https://github.com/WangXuezhang0522/image/blob/main/%E5%9B%BE%E5%BA%8A/%E5%9B%BE%E7%89%879.png?raw=true"><img height="200" src="https://github.com/WangXuezhang0522/image/blob/main/%E5%9B%BE%E5%BA%8A/%E5%9B%BE%E7%89%8710.png?raw=true">

## 实现思路
核心组件
Flask框架：用于创建和配置API接口，处理前端请求。

langchain框架：
- LLM（大语言模型）：作为核心思考部分，提供智能分析。
- Prompt：为LLM提供回答约束，明确任务要求。
- Chains：串联不同功能组件，形成完整流程。
- Agent：将LLM的思考结果转化为实际行动。

功能实现

通过Flask框架，创建多个API接口langchain框架的LLM模块负责智能分析，Prompt模块负责明确任务要求，Chains模块负责流程串联，Agent模块负责执行动作。
