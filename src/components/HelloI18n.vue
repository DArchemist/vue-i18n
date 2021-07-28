<template>
  <div class="col-12">
    <div class="d-flex justify-content-between my-5">
      <p>{{ $d(new Date(), "long") }}</p>
      <select v-model="$i18n.locale" @change="setLocale()">
        <option value="en" selected>English</option>
        <option value="es">Español</option>
        <option value="de">Deutsch</option>
        <option value="nb">Norsk (bokmal)</option>
        <option value="eo">Esperanto</option>
      </select>
    </div>
    <div class="d-flex justify-content-center my-5 input-group">
      <span class="h3 m-2">{{ $t("namePrompt") }} </span>
      <input type="text" v-model="name" class="m-2" />
    </div>
    <div class="text-center mt-5">
      <p class="display-2">{{ $t("hello", { name: name }) }}</p>
      <p class="h1">{{ $t("exampleText") }}</p>
      <p class="h2 text-secondary">{{ $tc("language", 5) }}</p>
      <p class="h2 text-secondary">{{ $n(1000, "currency") }}</p>
      <p class="h2 text-secondary">
        <em>@{{ $t("goodbye") }}@</em>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloI18n",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    setLocale() {
      const locale = this.$i18n.locale;
      localStorage.setItem("locale", locale);
    },
  },
};
</script>
