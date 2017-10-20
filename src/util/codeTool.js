export default {
  escapeHTML: function (a) {
    a = "" + a;
    return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  },

  unescapeHTML: function (a) {
    a = "" + a;
    // return a.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&#39;/g,"'");
    return a.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&apos;/g, "'").replace(/&#39;/g,"'").replace(/&ldquo;/g,"“").replace(/&rdquo;/g,"”").replace(/&lsquo;/g,"‘").replace(/&rsquo;/g,"’").replace(/&mdash;/g,"-");
  },

  formatTel : function (a) {
    a = "" + a;
    return a.replace(/-/g, "").replace(/\s/g,'')
  }
}
