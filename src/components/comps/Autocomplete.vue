<template>
    <div style="position:relative" v-bind:class="{'open':openSuggestion}">
        <input class="form-control" placeholder="Buscar por..." type="text" :value="value" @input="updateValue($event.target.value)"
          @keydown.enter = 'enter'
          @keydown.down = 'down'
          @keydown.up = 'up'
        >
        <ul class="dropdown-menu" style="width:auto">
            <li v-for="(suggestion, index) in matches"
                v-bind:class="{'active': isActive(index)}"
                @click="suggestionClick(index)"
            >
              <a href="#">{{ suggestion.name_public.toUpperCase()}} <small>({{ suggestion.name_scientific }})</small>
              </a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props: {
            value: {
                type: [String, Number],
               
            },
            suggestions: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                open: false,
                current: 0
            }
        },
        computed: {
            // Filtering the suggestion based on the input
            matches() {
                return this.suggestions.filter((obj) => {
                    return obj.name_public.toLowerCase().indexOf(this.value) >= 0 ||  obj.name_public.toUpperCase().indexOf(this.value) >= 0 || obj.name_public.indexOf(this.value) >= 0
                })
            },
            openSuggestion() {
                return this.selection !== '' &&
                    this.matches.length !== 0 &&
                    this.open === true
            }
        },
        methods: {
            updateValue(value) {
                if (this.open === false) {
                    this.open = true
                    this.current = 0
                }
                this.$emit('input', value)
            },
            // When enter pressed on the input
            enter() {
                this.$emit('input', this.matches[this.current].name_public.toUpperCase())
                this.open = false
            },
            // When up pressed while suggestions are open
            up() {
                if (this.current > 0) {
                    this.current--
                }
            },
            // When up pressed while suggestions are open
            down() {
                if (this.current < this.matches.length - 1) {
                    this.current++
                }
            },
            // For highlighting element
            isActive(index) {
                return index === this.current
            },
            // When one of the suggestion is clicked
            suggestionClick(index) {
                this.$emit('input', this.matches[index].name_public + ' (' + this.matches[index].name_scientific +')')
                //CodTree = this.matches[index].cod_tree
                this.$store.dispatch('setCodTree', this.matches[index])
                console.log('codtree>',this.matches[index])
                this.open = false
            }
        }
    }
</script>
<style scoped>
    a {
        display: block;
        font-size: 0.7em;
    }
</style>
