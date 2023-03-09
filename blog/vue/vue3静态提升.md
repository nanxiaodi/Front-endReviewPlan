# 静态提升（优化diff算法）
- 静态提升就是把永远不会变化的静态节点提出render函数之外，这些静态节点可以调用createElementVNode函数，并用/*#__PURE__*/做个标记，以_hoists_命名的变量，再放入render函数之中，并且diff算法会用到patchflag标记动态元素，可以快速定位需要更新的位置


```
// 元素模板
<div>
	<div>foo</div> <!-- hoisted -->
	<div>bar</div> <!-- hoisted -->
	<div>bar</div> <!-- hoisted -->
	<div>bar</div> <!-- hoisted -->
	<div>bar</div>
	<div>bar</div>
	<div>bar</div>
	<div v-if="isShow" :class="styleclass">
		<div>111</div> 
		<div>222</div>
    <div class="测试" v-if="isIF">
      <div>5555</div>
      <div>5555</div>
      <div>5555</div>
      <div>5555</div>
    </div>
		<div>333</div>
		<div>444</div>
		<div>444</div>
		<div>444</div>
		<div>444</div>
	</div>
	<div>{{ dynamic }}</div>
	<div>{{ dynamic }}</div>
</div>

// 编译之后
import { createElementVNode as _createElementVNode, createCommentVNode as _createCommentVNode, openBlock as _openBlock, createElementBlock as _createElementBlock, normalizeClass as _normalizeClass, toDisplayString as _toDisplayString } from "vue"

const _hoisted_1 = /*#__PURE__*/_createElementVNode("div", null, "foo", -1 /* HOISTED */)
const _hoisted_2 = /*#__PURE__*/_createElementVNode("div", null, "bar", -1 /* HOISTED */)
const _hoisted_3 = /*#__PURE__*/_createElementVNode("div", null, "bar", -1 /* HOISTED */)
const _hoisted_4 = /*#__PURE__*/_createElementVNode("div", null, "bar", -1 /* HOISTED */)
const _hoisted_5 = /*#__PURE__*/_createElementVNode("div", null, "bar", -1 /* HOISTED */)
const _hoisted_6 = /*#__PURE__*/_createElementVNode("div", null, "bar", -1 /* HOISTED */)
const _hoisted_7 = /*#__PURE__*/_createElementVNode("div", null, "bar", -1 /* HOISTED */)
const _hoisted_8 = /*#__PURE__*/_createElementVNode("div", null, "111", -1 /* HOISTED */)
const _hoisted_9 = /*#__PURE__*/_createElementVNode("div", null, "222", -1 /* HOISTED */)
const _hoisted_10 = {
  key: 0,
  class: "测试"
}
const _hoisted_11 = /*#__PURE__*/_createElementVNode("div", null, "5555", -1 /* HOISTED */)
const _hoisted_12 = /*#__PURE__*/_createElementVNode("div", null, "5555", -1 /* HOISTED */)
const _hoisted_13 = /*#__PURE__*/_createElementVNode("div", null, "5555", -1 /* HOISTED */)
const _hoisted_14 = /*#__PURE__*/_createElementVNode("div", null, "5555", -1 /* HOISTED */)
const _hoisted_15 = [
  _hoisted_11,
  _hoisted_12,
  _hoisted_13,
  _hoisted_14
]
const _hoisted_16 = /*#__PURE__*/_createElementVNode("div", null, "333", -1 /* HOISTED */)
const _hoisted_17 = /*#__PURE__*/_createElementVNode("div", null, "444", -1 /* HOISTED */)
const _hoisted_18 = /*#__PURE__*/_createElementVNode("div", null, "444", -1 /* HOISTED */)
const _hoisted_19 = /*#__PURE__*/_createElementVNode("div", null, "444", -1 /* HOISTED */)
const _hoisted_20 = /*#__PURE__*/_createElementVNode("div", null, "444", -1 /* HOISTED */)

export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", null, [
    _hoisted_1,
    _createCommentVNode(" hoisted "),
    _hoisted_2,
    _createCommentVNode(" hoisted "),
    _hoisted_3,
    _createCommentVNode(" hoisted "),
    _hoisted_4,
    _createCommentVNode(" hoisted "),
    _hoisted_5,
    _hoisted_6,
    _hoisted_7,
    (_ctx.isShow)
      ? (_openBlock(), _createElementBlock("div", {
          key: 0,
          class: _normalizeClass(_ctx.styleclass)
        }, [
          _hoisted_8,
          _hoisted_9,
          (_ctx.isIF)
            ? (_openBlock(), _createElementBlock("div", _hoisted_10, _hoisted_15))
            : _createCommentVNode("v-if", true),
          _hoisted_16,
          _hoisted_17,
          _hoisted_18,
          _hoisted_19,
          _hoisted_20
        ], 2 /* CLASS */))
      : _createCommentVNode("v-if", true),
    _createElementVNode("div", null, _toDisplayString(_ctx.dynamic), 1 /* TEXT */),
    _createElementVNode("div", null, _toDisplayString(_ctx.dynamic), 1 /* TEXT */)
  ]))
}

// Check the console for the AST
```