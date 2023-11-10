amis.define('docs/zh-CN/components/form/nestedselect.md', function(require, exports, module, define) {

  module.exports = {
    "title": "NestedSelect 级联选择器",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "NestedSelect 级联选择器",
    "icon": null,
    "order": 31,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"nested-select\",\n      \"name\": \"nestedSelect\",\n      \"label\": \"级联选择器\",\n      \"options\": [\n        {\n          \"label\": \"A\",\n          \"value\": \"a\"\n        },\n        {\n          \"label\": \"B\",\n          \"value\": \"b\",\n          \"children\": [\n            {\n              \"label\": \"B-1\",\n              \"value\": \"b-1\"\n            },\n            {\n              \"label\": \"B-2\",\n              \"value\": \"b-2\"\n            },\n            {\n              \"label\": \"B-3\",\n              \"value\": \"b-3\"\n            }\n          ]\n        },\n        {\n          \"label\": \"C\",\n          \"value\": \"c\"\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%8A%A8%E6%80%81%E9%80%89%E9%A1%B9\" href=\"#%E5%8A%A8%E6%80%81%E9%80%89%E9%A1%B9\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>动态选项</h2><p>通过 source 可以从上下文或 api 中获取选项信息，比如</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"page\",\n  \"data\": {\n    \"options\": [\n        {\n          \"label\": \"A\",\n          \"value\": \"a\"\n        },\n        {\n          \"label\": \"B\",\n          \"value\": \"b\",\n          \"children\": [\n            {\n              \"label\": \"B-1\",\n              \"value\": \"b-1\"\n            },\n            {\n              \"label\": \"B-2\",\n              \"value\": \"b-2\"\n            },\n            {\n              \"label\": \"B-3\",\n              \"value\": \"b-3\"\n            }\n          ]\n        },\n        {\n          \"label\": \"C\",\n          \"value\": \"c\"\n        }\n      ]\n  },\n  \"body\": {\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n      {\n        \"type\": \"nested-select\",\n        \"name\": \"nestedSelect\",\n        \"label\": \"级联选择器\",\n        \"source\": \"${options}\"\n      }\n    ]\n  }\n}\n</script></div><div class=\"markdown-body\">\n<p>也可以是 api 地址</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"page\",\n  \"body\": {\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n      {\n        \"type\": \"nested-select\",\n        \"name\": \"nestedSelect\",\n        \"label\": \"级联选择器\",\n        \"source\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/getTreeOptions\"\n      }\n    ]\n  }\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%8F%AA%E5%85%81%E8%AE%B8%E9%80%89%E4%B8%AD%E5%8F%B6%E5%AD%90%E8%8A%82%E7%82%B9\" href=\"#%E5%8F%AA%E5%85%81%E8%AE%B8%E9%80%89%E4%B8%AD%E5%8F%B6%E5%AD%90%E8%8A%82%E7%82%B9\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>只允许选中叶子节点</h2><blockquote>\n<p>1.8.0 及以上版本，如果是之前版本可以在对应的节点上不设置 value 实现</p>\n</blockquote>\n<p>在单选时，可以通过 <code>onlyLeaf</code> 来设置只允许选择叶子节点，即便分支节点有 <code>value</code> 也不会被选中。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"nested-select\",\n      \"name\": \"nestedSelect\",\n      \"label\": \"级联选择器\",\n      \"onlyLeaf\": true,\n      \"options\": [\n        {\n          \"label\": \"A\",\n          \"value\": \"a\"\n        },\n        {\n          \"label\": \"B\",\n          \"value\": \"b\",\n          \"children\": [\n            {\n              \"label\": \"B-1\",\n              \"value\": \"b-1\"\n            },\n            {\n              \"label\": \"B-2\",\n              \"value\": \"b-2\"\n            },\n            {\n              \"label\": \"B-3\",\n              \"value\": \"b-3\"\n            }\n          ]\n        },\n        {\n          \"label\": \"C\",\n          \"value\": \"c\"\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>在多选时，也可以通过 <code>onlyLeaf</code> 并且搭配 <code>cascade</code> 来设置只允许选择叶子节点，即便分支节点有 <code>value</code> 也不会有选中动作,</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"nested-select\",\n      \"name\": \"nestedSelect\",\n      \"label\": \"级联选择器\",\n      \"onlyLeaf\": true,\n      \"cascade\": true,\n      \"multiple\": true,\n      \"options\": [\n        {\n          \"label\": \"A\",\n          \"value\": \"a\"\n        },\n        {\n          \"label\": \"B\",\n          \"value\": \"b\",\n          \"children\": [\n            {\n              \"label\": \"B-1\",\n              \"value\": \"b-1\"\n            },\n            {\n              \"label\": \"B-2\",\n              \"value\": \"b-2\"\n            },\n            {\n              \"label\": \"B-3\",\n              \"value\": \"b-3\"\n            }\n          ]\n        },\n        {\n          \"label\": \"C\",\n          \"value\": \"c\"\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E9%80%89%E4%B8%AD%E7%88%B6%E8%8A%82%E7%82%B9%E6%98%AF%E5%90%A6%E8%87%AA%E5%8A%A8%E9%80%89%E4%B8%AD%E5%AD%90%E8%8A%82%E7%82%B9\" href=\"#%E9%80%89%E4%B8%AD%E7%88%B6%E8%8A%82%E7%82%B9%E6%98%AF%E5%90%A6%E8%87%AA%E5%8A%A8%E9%80%89%E4%B8%AD%E5%AD%90%E8%8A%82%E7%82%B9\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>选中父节点是否自动选中子节点</h2><p>默认选中父节点会自动选中子节点，可以设置<code>&quot;cascade&quot;: true</code>，不自动选中子节点</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"nested-select\",\n      \"name\": \"nestedSelect1\",\n      \"label\": \"默认自动选中子节点\",\n      \"multiple\": true,\n      \"options\": [\n        {\n          \"label\": \"A\",\n          \"value\": \"a\"\n        },\n        {\n          \"label\": \"B\",\n          \"value\": \"b\",\n          \"children\": [\n            {\n              \"label\": \"B-1\",\n              \"value\": \"b-1\"\n            },\n            {\n              \"label\": \"B-2\",\n              \"value\": \"b-2\"\n            },\n            {\n              \"label\": \"B-3\",\n              \"value\": \"b-3\"\n            }\n          ]\n        },\n        {\n          \"label\": \"C\",\n          \"value\": \"c\"\n        }\n      ]\n    },\n    {\n        \"type\": \"divider\"\n    },\n    {\n      \"type\": \"nested-select\",\n      \"name\": \"nestedSelect2\",\n      \"label\": \"不自动选中子节点\",\n      \"multiple\": true,\n      \"cascade\": true,\n      \"options\": [\n        {\n          \"label\": \"A\",\n          \"value\": \"a\"\n        },\n        {\n          \"label\": \"B\",\n          \"value\": \"b\",\n          \"children\": [\n            {\n              \"label\": \"B-1\",\n              \"value\": \"b-1\"\n            },\n            {\n              \"label\": \"B-2\",\n              \"value\": \"b-2\"\n            },\n            {\n              \"label\": \"B-3\",\n              \"value\": \"b-3\"\n            }\n          ]\n        },\n        {\n          \"label\": \"C\",\n          \"value\": \"c\"\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E9%80%89%E4%B8%AD%E7%88%B6%E8%8A%82%E7%82%B9-%E5%80%BC%E6%98%AF%E5%90%A6%E5%8C%85%E5%90%AB%E5%AD%90%E8%8A%82%E7%82%B9\" href=\"#%E9%80%89%E4%B8%AD%E7%88%B6%E8%8A%82%E7%82%B9-%E5%80%BC%E6%98%AF%E5%90%A6%E5%8C%85%E5%90%AB%E5%AD%90%E8%8A%82%E7%82%B9\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>选中父节点，值是否包含子节点</h2><p>默认选中父节点，是不会带上子节点的值，想要自动带上子节点的值，那么配置<code>&quot;withChildren&quot;: true</code></p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"nested-select\",\n      \"name\": \"nestedSelect1\",\n      \"label\": \"默认不自动带上子节点的值\",\n      \"multiple\": true,\n      \"options\": [\n        {\n          \"label\": \"A\",\n          \"value\": \"a\"\n        },\n        {\n          \"label\": \"B\",\n          \"value\": \"b\",\n          \"children\": [\n            {\n              \"label\": \"B-1\",\n              \"value\": \"b-1\"\n            },\n            {\n              \"label\": \"B-2\",\n              \"value\": \"b-2\"\n            },\n            {\n              \"label\": \"B-3\",\n              \"value\": \"b-3\"\n            }\n          ]\n        },\n        {\n          \"label\": \"C\",\n          \"value\": \"c\"\n        }\n      ]\n    },\n    {\n        \"type\": \"divider\"\n    },\n     {\n      \"type\": \"nested-select\",\n      \"name\": \"nestedSelect2\",\n      \"label\": \"自动带上子节点的值\",\n      \"multiple\": true,\n      \"withChildren\": true,\n      \"options\": [\n        {\n          \"label\": \"A\",\n          \"value\": \"a\"\n        },\n        {\n          \"label\": \"B\",\n          \"value\": \"b\",\n          \"children\": [\n            {\n              \"label\": \"B-1\",\n              \"value\": \"b-1\"\n            },\n            {\n              \"label\": \"B-2\",\n              \"value\": \"b-2\"\n            },\n            {\n              \"label\": \"B-3\",\n              \"value\": \"b-3\"\n            }\n          ]\n        },\n        {\n          \"label\": \"C\",\n          \"value\": \"c\"\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>也可以设置<code>onlyChildren</code>，实现只包含子节点的值</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"nested-select\",\n      \"name\": \"nestedSelect1\",\n      \"label\": \"默认不自动带上子节点的值\",\n      \"multiple\": true,\n      \"options\": [\n        {\n          \"label\": \"A\",\n          \"value\": \"a\"\n        },\n        {\n          \"label\": \"B\",\n          \"value\": \"b\",\n          \"children\": [\n            {\n              \"label\": \"B-1\",\n              \"value\": \"b-1\",\n              \"children\": [\n                {\n                  \"label\": \"D-1\",\n                  \"value\": \"d-1\"\n                },\n                {\n                  \"label\": \"D-2\",\n                  \"value\": \"d-2\"\n                },\n                {\n                  \"label\": \"D-3\",\n                  \"value\": \"d-3\"\n                }\n              ]\n            },\n            {\n              \"label\": \"B-2\",\n              \"value\": \"b-2\"\n            },\n            {\n              \"label\": \"B-3\",\n              \"value\": \"b-3\"\n            }\n          ]\n        },\n        {\n          \"label\": \"C\",\n          \"value\": \"c\"\n        }\n      ]\n    },\n    {\n        \"type\": \"divider\"\n    },\n     {\n      \"type\": \"nested-select\",\n      \"name\": \"nestedSelect2\",\n      \"label\": \"只包含子节点的值\",\n      \"multiple\": true,\n      \"onlyChildren\": true,\n      \"clearable\": true,\n      \"options\": [\n        {\n          \"label\": \"A\",\n          \"value\": \"a\"\n        },\n        {\n          \"label\": \"B\",\n          \"value\": \"b\",\n          \"children\": [\n            {\n              \"label\": \"B-1\",\n              \"value\": \"b-1\",\n              \"children\": [\n                {\n                  \"label\": \"D-1\",\n                  \"value\": \"d-1\"\n                },\n                {\n                  \"label\": \"D-2\",\n                  \"value\": \"d-2\"\n                },\n                {\n                  \"label\": \"D-3\",\n                  \"value\": \"d-3\"\n                }\n              ]\n            },\n            {\n              \"label\": \"B-2\",\n              \"value\": \"b-2\"\n            },\n            {\n              \"label\": \"B-3\",\n              \"value\": \"b-3\"\n            }\n          ]\n        },\n        {\n          \"label\": \"C\",\n          \"value\": \"c\"\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E4%BB%85%E5%B1%95%E7%A4%BA%E9%80%89%E4%B8%AD%E8%8A%82%E7%82%B9%E6%96%87%E6%9C%AC%E4%BF%A1%E6%81%AF\" href=\"#%E4%BB%85%E5%B1%95%E7%A4%BA%E9%80%89%E4%B8%AD%E8%8A%82%E7%82%B9%E6%96%87%E6%9C%AC%E4%BF%A1%E6%81%AF\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>仅展示选中节点文本信息</h2><p>设置<code>hideNodePathLabel: true</code>，可以隐藏选择框中已选择节点的祖先节点(ancestor)的<code>labelField</code>字段值，仅展示当前选中节点的<code>labelField</code>字段值。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"debug\": true,\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"nested-select\",\n      \"name\": \"nestedSelect\",\n      \"label\": \"展示已选择节点的祖先节点的文本信息\",\n      \"value\": \"a,b-1,b-3\",\n      \"multiple\": true,\n      \"options\": [\n        {\n          \"label\": \"A\",\n          \"value\": \"a\"\n        },\n        {\n          \"label\": \"B\",\n          \"value\": \"b\",\n          \"children\": [\n            {\n              \"label\": \"B-1\",\n              \"value\": \"b-1\"\n            },\n            {\n              \"label\": \"B-2\",\n              \"value\": \"b-2\"\n            },\n            {\n              \"label\": \"B-3\",\n              \"value\": \"b-3\"\n            }\n          ]\n        },\n        {\n          \"label\": \"C\",\n          \"value\": \"c\"\n        }\n      ],\n    },\n    {\n      \"type\": \"divider\"\n    },\n    {\n      \"type\": \"nested-select\",\n      \"name\": \"nestedSelect2\",\n      \"label\": \"仅展示已选择节点的文本信息\",\n      \"value\": \"a,b-1,b-3\",\n      \"multiple\": true,\n      \"cascade\": true,\n      \"hideNodePathLabel\": true,\n      \"options\": [\n        {\n          \"label\": \"A\",\n          \"value\": \"a\"\n        },\n        {\n          \"label\": \"B\",\n          \"value\": \"b\",\n          \"children\": [\n            {\n              \"label\": \"B-1\",\n              \"value\": \"b-1\"\n            },\n            {\n              \"label\": \"B-2\",\n              \"value\": \"b-2\"\n            },\n            {\n              \"label\": \"B-3\",\n              \"value\": \"b-3\"\n            }\n          ]\n        },\n        {\n          \"label\": \"C\",\n          \"value\": \"c\"\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E9%80%89%E9%A1%B9%E6%90%9C%E7%B4%A2\" href=\"#%E9%80%89%E9%A1%B9%E6%90%9C%E7%B4%A2\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>选项搜索</h2><p>配置<code>&quot;searchable&quot;: true</code>后，输入框内输入内容时，下拉数据源会进行前端过滤，过滤的关键字段默认为<code>value</code>或<code>label</code>。如果通过<a href=\"./options#选项值字段-valuefield\"><code>valueField</code></a>或<a href=\"./options#选项标签字段-labelfield\"><code>labelField</code></a>属性，则会选择对应的字段进行过滤。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  type: 'form',\n  api: 'https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm',\n  body: [\n    {\n      type: 'nested-select',\n      name: 'nestedSelect1',\n      label: '级联选择器（单选）',\n      options: [\n        {\n          label: 'A',\n          value: 'a'\n        },\n        {\n          label: 'B',\n          value: 'b',\n          children: [\n            {\n              label: 'B-1',\n              value: 'b1'\n            },\n            {\n              label: 'B-2',\n              value: 'b2'\n            },\n            {\n              label: 'B-3',\n              value: 'b3'\n            }\n          ]\n        },\n        {\n          label: 'C',\n          value: 'c'\n        }\n      ],\n      searchable: true,\n      multiple: false,\n      joinValues: true,\n      clearable: true\n    },\n    {\n      type: 'nested-select',\n      name: 'nestedSelect2',\n      label: '级联选择器（多选）',\n      options: [\n        {\n          label: 'A',\n          value: 'a'\n        },\n        {\n          label: 'B',\n          value: 'b',\n          children: [\n            {\n              label: 'B-1',\n              value: 'b1'\n            },\n            {\n              label: 'B-2',\n              value: 'b2'\n            },\n            {\n              label: 'B-3',\n              value: 'b3'\n            }\n          ]\n        },\n        {\n          label: 'C',\n          value: 'c'\n        }\n      ],\n      searchable: true,\n      multiple: true,\n      joinValues: true,\n      clearable: true\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E9%99%90%E5%88%B6%E6%A0%87%E7%AD%BE%E6%9C%80%E5%A4%A7%E5%B1%95%E7%A4%BA%E6%95%B0%E9%87%8F\" href=\"#%E9%99%90%E5%88%B6%E6%A0%87%E7%AD%BE%E6%9C%80%E5%A4%A7%E5%B1%95%E7%A4%BA%E6%95%B0%E9%87%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>限制标签最大展示数量</h2><blockquote>\n<p>3.3.0 及以上版本</p>\n</blockquote>\n<p><code>maxTagCount</code>可以限制标签的最大展示数量，超出数量的部分会收纳到 Popover 中，可以通过<code>overflowTagPopover</code>配置 Popover 相关的<a href=\"../tooltip#属性表\">属性</a>，注意该属性仅在多选模式开启后生效。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"body\": [\n        {\n            \"type\": \"nested-select\",\n            \"name\": \"nestedSelect\",\n            \"label\": \"级联选择器\",\n            \"multiple\": true,\n            \"maxTagCount\": 3,\n            \"overflowTagPopover\": {\n              \"title\": \"已选项\"\n            },\n            \"value\": \"Apple,Banana,Blackberry,Blueberry,Cherry,Carambola,Coconut,Kiwifruit,Lemon,Pineapple,Vegetables,Wheat,Rice\",\n            \"options\": [\n              {\n                \"label\": \"水果\",\n                \"value\": \"Fruits\",\n                \"children\" : [\n                  {\"label\": \"苹果\", \"value\": \"Apple\"},\n                  {\"label\": \"香蕉\", \"value\": \"Banana\"},\n                  {\"label\": \"黑莓\", \"value\": \"Blackberry\"},\n                  {\"label\": \"蓝莓\", \"value\": \"Blueberry\"},\n                  {\"label\": \"樱桃\", \"value\": \"Cherry\"},\n                  {\"label\": \"杨桃\", \"value\": \"Carambola\"},\n                  {\"label\": \"椰子\", \"value\": \"Coconut\"},\n                  {\"label\": \"猕猴桃\", \"value\": \"Kiwifruit\"},\n                  {\"label\": \"柠檬\", \"value\": \"Lemon\"},\n                  {\"label\": \"菠萝\", \"value\": \"Pineapple\"}\n                ]\n              },\n              {\n                \"label\": \"蔬菜\",\n                \"value\": \"Vegetables\",\n                \"children\": [\n                  {\"label\": \"西兰花\", \"value\": \"Broccoli\"},\n                  {\"label\": \"菠菜\", \"value\": \"Spinach\"},\n                  {\"label\": \"南瓜\", \"value\": \"Pumpkin\"}\n                ]\n              },\n              {\n                \"label\": \"谷物\",\n                \"value\": \"Grain\",\n                \"children\": [\n                  {\"label\": \"小麦\", \"value\": \"Wheat\"},\n                  {\"label\": \"水稻\", \"value\": \"Rice\"},\n                  {\"label\": \"燕麦\", \"value\": \"Oats\"}\n                ]\n              }\n            ]\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><p>当做选择器表单项使用时，除了支持 <a href=\"./formitem#%E5%B1%9E%E6%80%A7%E8%A1%A8\">普通表单项属性表</a> 中的配置以外，还支持下面一些配置</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n<th>版本</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>options</td>\n<td><code>Array&lt;object&gt;</code>或<code>Array&lt;string&gt;</code></td>\n<td></td>\n<td><a href=\"./options#%E9%9D%99%E6%80%81%E9%80%89%E9%A1%B9%E7%BB%84-options\">选项组</a></td>\n<td></td>\n</tr>\n<tr>\n<td>source</td>\n<td><code>string</code>或 <a href=\"../../../docs/types/api\">API</a></td>\n<td></td>\n<td><a href=\"./options#%E5%8A%A8%E6%80%81%E9%80%89%E9%A1%B9%E7%BB%84-source\">动态选项组</a></td>\n<td></td>\n</tr>\n<tr>\n<td>delimiter</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td><a href=\"./options#%E6%8B%BC%E6%8E%A5%E7%AC%A6-delimiter\">拼接符</a></td>\n<td></td>\n</tr>\n<tr>\n<td>labelField</td>\n<td><code>boolean</code></td>\n<td><code>&quot;label&quot;</code></td>\n<td><a href=\"./options#%E9%80%89%E9%A1%B9%E6%A0%87%E7%AD%BE%E5%AD%97%E6%AE%B5-labelfield\">选项标签字段</a></td>\n<td></td>\n</tr>\n<tr>\n<td>valueField</td>\n<td><code>boolean</code></td>\n<td><code>&quot;value&quot;</code></td>\n<td><a href=\"./options#%E9%80%89%E9%A1%B9%E5%80%BC%E5%AD%97%E6%AE%B5-valuefield\">选项值字段</a></td>\n<td></td>\n</tr>\n<tr>\n<td>joinValues</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td><a href=\"./options#%E6%8B%BC%E6%8E%A5%E5%80%BC-joinvalues\">拼接值</a></td>\n<td></td>\n</tr>\n<tr>\n<td>extractValue</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td><a href=\"./options#%E6%8F%90%E5%8F%96%E5%A4%9A%E9%80%89%E5%80%BC-extractvalue\">提取值</a></td>\n<td></td>\n</tr>\n<tr>\n<td>autoFill</td>\n<td><code>object</code></td>\n<td></td>\n<td><a href=\"./options#%E8%87%AA%E5%8A%A8%E5%A1%AB%E5%85%85-autofill\">自动填充</a></td>\n<td></td>\n</tr>\n<tr>\n<td>cascade</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>设置 <code>true</code>时，当选中父节点时不自动选择子节点。</td>\n<td></td>\n</tr>\n<tr>\n<td>withChildren</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>设置 <code>true</code>时，选中父节点时，值里面将包含子节点的值，否则只会保留父节点的值。</td>\n<td></td>\n</tr>\n<tr>\n<td>onlyChildren</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>多选时，选中父节点时，是否只将其子节点加入到值中。</td>\n<td></td>\n</tr>\n<tr>\n<td>searchable</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>可否搜索</td>\n<td></td>\n</tr>\n<tr>\n<td>searchPromptText</td>\n<td><code>string</code></td>\n<td><code>&quot;输入内容进行检索&quot;</code></td>\n<td>搜索框占位文本</td>\n<td></td>\n</tr>\n<tr>\n<td>noResultsText</td>\n<td><code>string</code></td>\n<td><code>&quot;未找到任何结果&quot;</code></td>\n<td>无结果时的文本</td>\n<td></td>\n</tr>\n<tr>\n<td>multiple</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>可否多选</td>\n<td></td>\n</tr>\n<tr>\n<td>hideNodePathLabel</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否隐藏选择框中已选择节点的路径 label 信息</td>\n<td></td>\n</tr>\n<tr>\n<td>onlyLeaf</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>只允许选择叶子节点</td>\n<td></td>\n</tr>\n<tr>\n<td>maxTagCount</td>\n<td><code>number</code></td>\n<td></td>\n<td>标签的最大展示数量，超出数量后以收纳浮层的方式展示，仅在多选模式开启后生效</td>\n<td><code>3.3.0</code></td>\n</tr>\n<tr>\n<td>overflowTagPopover</td>\n<td><code>TooltipObject</code></td>\n<td><code>{&quot;placement&quot;: &quot;top&quot;, &quot;trigger&quot;: &quot;hover&quot;, &quot;showArrow&quot;: false, &quot;offset&quot;: [0, -10]}</code></td>\n<td>收纳浮层的配置属性，详细配置参考<a href=\"../tooltip#属性表\">Tooltip</a></td>\n<td><code>3.3.0</code></td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E4%BA%8B%E4%BB%B6%E8%A1%A8\" href=\"#%E4%BA%8B%E4%BB%B6%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>事件表</h2><p>当前组件会对外派发以下事件，可以通过<code>onEvent</code>来监听这些事件，并通过<code>actions</code>来配置执行的动作，在<code>actions</code>中可以通过<code>${事件参数名}</code>或<code>${event.data.[事件参数名]}</code>来获取事件产生的数据，详细请查看<a href=\"../../docs/concepts/event-action\">事件动作</a>。</p>\n<blockquote>\n<p><code>[name]</code>表示当前组件绑定的名称，即<code>name</code>属性，如果没有配置<code>name</code>属性，则通过<code>value</code>取值。</p>\n</blockquote>\n<table>\n<thead>\n<tr>\n<th>事件名称</th>\n<th>事件参数</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>change</td>\n<td><code>[name]: string</code> 组件的值</td>\n<td>选中值变化时触发</td>\n</tr>\n<tr>\n<td>blur</td>\n<td><code>[name]: string</code> 组件的值</td>\n<td>输入框失去焦点时触发</td>\n</tr>\n<tr>\n<td>focus</td>\n<td><code>[name]: string</code> 组件的值</td>\n<td>输入框获取焦点时触发</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E5%8A%A8%E4%BD%9C%E8%A1%A8\" href=\"#%E5%8A%A8%E4%BD%9C%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>动作表</h2><p>当前组件对外暴露以下特性动作，其他组件可以通过指定<code>actionType: 动作名称</code>、<code>componentId: 该组件id</code>来触发这些动作，动作配置可以通过<code>args: {动作配置项名称: xxx}</code>来配置具体的参数，详细请查看<a href=\"../../docs/concepts/event-action#触发其他组件的动作\">事件动作</a>。</p>\n<table>\n<thead>\n<tr>\n<th>动作名称</th>\n<th>动作配置</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>clear</td>\n<td>-</td>\n<td>清空</td>\n</tr>\n<tr>\n<td>reset</td>\n<td>-</td>\n<td>将值重置为<code>resetValue</code>，若没有配置<code>resetValue</code>，则清空</td>\n</tr>\n<tr>\n<td>reload</td>\n<td>-</td>\n<td>重新加载，调用 <code>source</code>，刷新数据域数据刷新（重新加载）</td>\n</tr>\n<tr>\n<td>setValue</td>\n<td><code>value: string</code> 更新的值</td>\n<td>更新数据，开启<code>multiple</code>时，多个值用<code>,</code>分隔</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "动态选项",
          "fragment": "%E5%8A%A8%E6%80%81%E9%80%89%E9%A1%B9",
          "fullPath": "#%E5%8A%A8%E6%80%81%E9%80%89%E9%A1%B9",
          "level": 2
        },
        {
          "label": "只允许选中叶子节点",
          "fragment": "%E5%8F%AA%E5%85%81%E8%AE%B8%E9%80%89%E4%B8%AD%E5%8F%B6%E5%AD%90%E8%8A%82%E7%82%B9",
          "fullPath": "#%E5%8F%AA%E5%85%81%E8%AE%B8%E9%80%89%E4%B8%AD%E5%8F%B6%E5%AD%90%E8%8A%82%E7%82%B9",
          "level": 2
        },
        {
          "label": "选中父节点是否自动选中子节点",
          "fragment": "%E9%80%89%E4%B8%AD%E7%88%B6%E8%8A%82%E7%82%B9%E6%98%AF%E5%90%A6%E8%87%AA%E5%8A%A8%E9%80%89%E4%B8%AD%E5%AD%90%E8%8A%82%E7%82%B9",
          "fullPath": "#%E9%80%89%E4%B8%AD%E7%88%B6%E8%8A%82%E7%82%B9%E6%98%AF%E5%90%A6%E8%87%AA%E5%8A%A8%E9%80%89%E4%B8%AD%E5%AD%90%E8%8A%82%E7%82%B9",
          "level": 2
        },
        {
          "label": "选中父节点，值是否包含子节点",
          "fragment": "%E9%80%89%E4%B8%AD%E7%88%B6%E8%8A%82%E7%82%B9-%E5%80%BC%E6%98%AF%E5%90%A6%E5%8C%85%E5%90%AB%E5%AD%90%E8%8A%82%E7%82%B9",
          "fullPath": "#%E9%80%89%E4%B8%AD%E7%88%B6%E8%8A%82%E7%82%B9-%E5%80%BC%E6%98%AF%E5%90%A6%E5%8C%85%E5%90%AB%E5%AD%90%E8%8A%82%E7%82%B9",
          "level": 2
        },
        {
          "label": "仅展示选中节点文本信息",
          "fragment": "%E4%BB%85%E5%B1%95%E7%A4%BA%E9%80%89%E4%B8%AD%E8%8A%82%E7%82%B9%E6%96%87%E6%9C%AC%E4%BF%A1%E6%81%AF",
          "fullPath": "#%E4%BB%85%E5%B1%95%E7%A4%BA%E9%80%89%E4%B8%AD%E8%8A%82%E7%82%B9%E6%96%87%E6%9C%AC%E4%BF%A1%E6%81%AF",
          "level": 2
        },
        {
          "label": "选项搜索",
          "fragment": "%E9%80%89%E9%A1%B9%E6%90%9C%E7%B4%A2",
          "fullPath": "#%E9%80%89%E9%A1%B9%E6%90%9C%E7%B4%A2",
          "level": 2
        },
        {
          "label": "限制标签最大展示数量",
          "fragment": "%E9%99%90%E5%88%B6%E6%A0%87%E7%AD%BE%E6%9C%80%E5%A4%A7%E5%B1%95%E7%A4%BA%E6%95%B0%E9%87%8F",
          "fullPath": "#%E9%99%90%E5%88%B6%E6%A0%87%E7%AD%BE%E6%9C%80%E5%A4%A7%E5%B1%95%E7%A4%BA%E6%95%B0%E9%87%8F",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        },
        {
          "label": "事件表",
          "fragment": "%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "fullPath": "#%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "level": 2
        },
        {
          "label": "动作表",
          "fragment": "%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "fullPath": "#%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
