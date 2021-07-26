<template>
  <div class="col-12">
    <div class="d-flex justify-content-end m-5">
      <select v-model="$i18n.locale" @change="setLocale()">
        <option value="en" selected>English</option>
        <option value="es">Español</option>
        <option value="de">Deutsch</option>
        <option value="no">Norsk (bokmal)</option>
        <option value="eo">Esperanto</option>
      </select>
    </div>
    <div class="text-center mt-5">
      <p class="h1">{{ $t("exampleText") }}</p>
      <p class="h2 text-secondary">
        <em>@{{ $t("goodbye") }}@</em>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloI18n",
  methods: {
    setLocale() {
      const locale = this.$i18n.locale;
      localStorage.setItem("locale", locale);
    },
  },
};
</script>
