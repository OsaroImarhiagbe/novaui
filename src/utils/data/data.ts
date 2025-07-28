import {GenericSearchTiny,GenericChatTiny} from "@visa/nova-icons-react";
import { code_templateMap,GenerateCode } from "../types/types";

export const sidebar = [
    {
        name:'New Chat',
        icon: GenericChatTiny
    },
    {
        name:'Search chats',
        icon: GenericSearchTiny
    },
    {
        name:'Chats',
    },

]
export const suggestComponents = (prompt:string) => {
    const lowerCase = prompt.toLowerCase()
    const usedComponents = new Set<string>()

    for(const [keyword,components] of Object.entries(componentMap)){
        if(lowerCase.includes(keyword)){
            components.forEach((comp) => usedComponents.add(comp))
        }
    }
    return Array.from(usedComponents)
}

export const NovaUI = (input:string) =>{
    // return ai message logic
}


// componentMapper.ts
export const componentMap:Record<string,string[]> = {
  // 🔐 Authentication
  "login": ["Input", "Checkbox", "Button", "InputContainer", "Label", "Utility"],
  "signin": ["Input", "Checkbox", "Button", "InputContainer", "Label", "Utility"],
  "signup": ["Input", "Checkbox", "Button", "InputContainer", "Label", "Utility"],
  "email": ["Input", "Label", "InputContainer"],
  "username": ["Input", "Label", "InputContainer"],
  "password": ["Input", "Label", "InputContainer"],
  "remember me": ["Checkbox"],
  "submit": ["Button"],
  "cancel": ["Button"],
  "next": ["Button"],

  // 📄 Forms
  "form": ["Input", "Checkbox", "Button", "InputContainer", "Label", "Utility"],
  "input": ["Input", "Label", "InputContainer"],
  "checkbox": ["Checkbox", "Label"],
  "radio": ["Input"], // Assuming no radio-specific component in Nova
  "textarea": ["Input"], // Could be enhanced if Nova has one
  "select": ["Input"], // Replace if Visa has a Select component
  "label": ["Label"],
  "validation": ["Typography"],
  "error": ["Typography"],

  // 🧭 Navigation
  "tabs": ["Tabs", "Tab", "TabSuffix"],
  "navigation": ["Nav", "Link", "Button"],
  "sidebar": ["Nav", "Button", "Utility"],
  "menu": ["Tabs", "Button"],

  // 🧱 Layout & Utilities
  "layout": ["Utility", "UtilityFragment", "Divider"],
  "section": ["Utility", "Typography", "Divider"],
  "container": ["Utility", "InputContainer"],
  "card": ["Utility"], // Visa may not have Card component, but Utility can act like one
  "divider": ["Divider"],

  // 🧾 Content
  "title": ["Typography"],
  "heading": ["Typography"],
  "subtitle": ["Typography"],
  "description": ["Typography"],
  "text": ["Typography"],
  "content": ["Typography", "Divider"],

  // 📞 Contact
  "contact": ["Input", "Button", "InputContainer", "Label"],

  // ⚙️ Settings & Config
  "settings": ["Tabs", "Utility", "Button"],
  "preferences": ["Checkbox", "Tabs", "Button"],

  // 📦 Miscellaneous
  "search": ["Input", "Button"],
  "feedback": ["Textarea", "Button", "Typography"], // replace Textarea if applicable
  "upload": ["Button"],
  "profile": ["Input", "Typography", "Utility"],
};


const code_template:code_templateMap = {
    Accordion:{
      name:'Accordian',
      template:`import { Accordion, AccordionHeading, AccordionPanel, AccordionToggleIcon, Typography } from '@visa/nova-react';
          export const CollapsedAccordion = () => {
            return (
              <Accordion>
                <AccordionHeading buttonSize="large" colorScheme="secondary">
                  <AccordionToggleIcon />
                  Accordion title
                </AccordionHeading>
                <AccordionPanel>
                  <Typography>This is required text that describes the accordion section in more detail.</Typography>
                </AccordionPanel>
              </Accordion>
            );
          };`,
      props:{
        buttonSize:'large',
        colorScheme:'secondary'
      }
    },
    AnchorLinkMenu:{
      name:'AnchorLinkMenu',
      template:`import { AnchorLinkMenu, AnchorLinkMenuHeader, Link, Typography } from '@visa/nova-react';

      // TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
      const id = 'default-anchor-link-menu';

      export const DefaultAnchorLinkMenu = () => {
        return (
          <AnchorLinkMenu aria-labelledby=>
            <section>
              <AnchorLinkMenuHeader>
                <Typography id=tag="h2" variant="overline">
                  Section title
                </Typography>
              </AnchorLinkMenuHeader>
              <ul>
                <li>
                  <Link aria-current="true" href="./anchor-link-menu">
                    L1 label 1
                  </Link>
                </li>
                <li>
                  <Link href="./anchor-link-menu">L1 label 2</Link>
                </li>
                <li>
                  <Link href="./anchor-link-menu">L1 label 3</Link>
                </li>
                <li>
                  <Link href="./anchor-link-menu">L1 label 4</Link>
                </li>
                <li>
                  <Link href="./anchor-link-menu">L1 label 5</Link>
                </li>
              </ul>
            </section>
          </AnchorLinkMenu>
        );
      };`,
      props:{
        id:"id-header",
      }
    },
    Avatar:{
      name:'Avatar',
      template:`import { Avatar } from '@visa/nova-react';

        /// This is the base url for where your site is deployed. "import.meta.env.BASE_URL" is the environment variable used to import the base url for Vite. Change this import to match your build tool's base url.
        const BASE_URL = import.meta.env.BASE_URL;
        const user = 'Alex Miller';

        export const SmallImageAvatar = () => {
          return <Avatar alt={user} small tag="img" src={BASE_URL + '/alex-miller-stock.png'} />;
        };`,
        props:{
          alt:'some image',
          tag:'img',
          src:'image/user.'
        }
    },
    Badge:{
      name:"Badge",
      template:`import { VisaHistoryTiny } from '@visa/nova-icons-react';
          import { Badge } from '@visa/nova-react';

          export const SubtleBadgeDefault = () => {
            return (
                <Badge badgeType="subtle">
                  <VisaHistoryTiny aria-label="history" /> Label
                </Badge>
            );
          };`,
          props:{
            badgeType:'subtle'
          }
    },
    Banner:{
      name:'Banner',
      template:`import { Banner } from '@visa/nova-react';
      export const EmptyInformationBanner = () => {
        return <Banner></Banner>;
      };`,
    },
    Breadcrumbs:{
      name:'Breadcrumbs',
      template:`import { Breadcrumbs, Link } from '@visa/nova-react';

        export const DefaultBreadcrumbs = () => {
          return (
            <Breadcrumbs ariaLabel="Default breadcrumbs">
              <ol>
                <li>
                  <Link href="./">L1 label</Link>
                </li>
                <li>
                  <Link href="./">L2 label</Link>
                </li>
                <li>
                  <Link href="./">L3 label</Link>
                </li>
                <li>
                  <span aria-current="page">L4 label</span>
                </li>
              </ol>
            </Breadcrumbs>
          );
        };`,
    },
    Button: {
      name: 'Button',
      template: '<Button>Primary action</Button>',
      props: {
        type: 'submit',
        variant: 'primary',
        children: 'Submit'
      }
    },
    Checkbox: {
      name: 'Checkbox',
      template: `<Utility vAlignItems="center" vFlex vGap={2}>
      <Checkbox id={id} />
      <Label htmlFor={id}>Label</Label>
    </Utility>`,
      props: {
        label: 'Remember me',
        checked: false
      }
    },
    Chips:{
      name:'Chips',
      template:`import { Checkbox, Chip } from '@visa/nova-react';

        // TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
        const id = 'default-selection-chip';

        export const DefaultSelectionChip = () => {
          return (
            <Chip chipType="selection" htmlFor={id} tag="label">
              Label
              <Checkbox id={id} />
            </Chip>
          );
        };`,
        props:{
          chipType:'selection',
          htmlFor:'use_id',
          tag:'label'
        }
    },
    ColorSelector:{
      name:'ColorSelector',
      template:`import {
            offset,
            safePolygon,
            useDismiss,
            useFloating,
            useFocus,
            useHover,
            useInteractions,
            useRole,
          } from '@floating-ui/react';
          import { Input, Label, Button, Tooltip, Utility, UtilityFragment } from '@visa/nova-react';
          import { VisaAccessibilityTiny } from '@visa/nova-icons-react';
          import { useState } from 'react';


          // TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
          const id = 'color-input';

          export const ColorInput = () => {
            const [isOpen, setIsOpen] = useState(false);

            const { x, y, strategy, refs, context } = useFloating({
              middleware: [offset(2)],
              open: isOpen,
              onOpenChange: setIsOpen,
              placement: 'right',
            });

            const dismiss = useDismiss(context);
            const focus = useFocus(context);
            const hover = useHover(context, { handleClose: safePolygon(), move: false });
            const role = useRole(context, { role: 'tooltip' });

            const { getReferenceProps, getFloatingProps } = useInteractions([dismiss, focus, hover, role]);

            return (
              <Utility vFlex vAlignItems="center" vGap={6}>
                <UtilityFragment vFlexGrow0 style={{ flexBasis: '5%' }}>
                  <Input id={id} type="color" />
                </UtilityFragment>
                <Label htmlFor={id}>Label</Label>
                <Utility vAlignItems="center" vFlex vFlexCol vGap={2}>
                <Button 
                  aria-labelledby=
                  aria-label="Color selector accessibility information"
                  colorScheme="tertiary"
                  iconButton
                  ref={refs.setReference} {...getReferenceProps()}>
                    <VisaAccessibilityTiny rtl />
                  </Button>
                  {isOpen && (
                  <Tooltip
                    ref={refs.setFloating}
                    style={{
                      left: x,
                      position: strategy,
                      top: y,
                      width: 'fit-content',
                    }}
                    {...getFloatingProps()}
                  >
                    For RGB, use values between 0-255. For HSL, use H values between 0-359, S and L values between 0-100%. For hex,
                    use the format #RRGGBB and values between 0-9 or A-F.
                  </Tooltip>
                )}
                </Utility>
              </Utility>
            );
          };,`,
    },
    Combobox:{
      name:'Combobox',
      template:`import { VisaChevronDownTiny } from '@visa/nova-icons-react';
          import {
            Button,
            Combobox,
            DropdownContainer,
            Input,
            InputContainer,
            Label,
            Listbox,
            ListboxContainer,
            ListboxItem,
            Radio,
            UtilityFragment,
          } from '@visa/nova-react';
          import { UseComboboxState, UseComboboxStateChangeOptions, useCombobox } from 'downshift';

          type Item = { value: string };

          const items: Item[] = [
            { value: 'Option A' },
            { value: 'Option B' },
            { value: 'Option C' },
            { value: 'Option D' },
            { value: 'Option E' },
          ];

          export const itemToString = (item: Item | null) => (item ? item.value : '');

          export const stateReducer = <ItemType,>(
            state: UseComboboxState<ItemType>,
            { type, changes }: UseComboboxStateChangeOptions<ItemType>
          ) =>
            // this prevents on mouse hover, the item in the list is automatic selected
            type === useCombobox.stateChangeTypes.ItemMouseMove || type === useCombobox.stateChangeTypes.MenuMouseLeave
              ? {
                  ...changes, // default Downshift new state changes on item selection.
                  highlightedIndex: state.highlightedIndex,
                }
              : changes;

          export const NoAutocompleteCombobox = () => {
            const {
              getInputProps,
              getItemProps,
              getLabelProps,
              getMenuProps,
              getToggleButtonProps,
              highlightedIndex,
              inputValue,
              isOpen,
            } = useCombobox({
              items: items,
              itemToString,
              stateReducer,
            });
            const { id: listboxId, ...listboxProps } = getMenuProps();

            return (
              <Combobox>
                <UtilityFragment vFlex vFlexCol vGap={4}>
                  <DropdownContainer>
                    <Label {...getLabelProps()}>Label</Label>
                    <UtilityFragment vFlexRow>
                      <InputContainer>
                        <Input
                          aria-haspopup="listbox"
                          name="text-input-field-1"
                          type="text"
                          {...getInputProps({ 'aria-expanded': isOpen, 'aria-owns': listboxId })}
                        />
                        <Button
                          aria-label="expand"
                          buttonSize="small"
                          colorScheme="tertiary"
                          iconButton
                          {...getToggleButtonProps()}
                        >
                          <VisaChevronDownTiny />
                        </Button>
                      </InputContainer>
                    </UtilityFragment>
                  </DropdownContainer>
                </UtilityFragment>
                <ListboxContainer>
                  <Listbox id={listboxId} {...listboxProps}>
                    {items.map((item, index) => (
                      <ListboxItem
                        className={highlightedIndex === index ? 'v-listbox-item-highlighted' : ''}
                        key={}
                        {...getItemProps({
                          'aria-selected': inputValue === item.value,
                          index,
                          item,
                        })}
                      >
                        <UtilityFragment vFlexShrink0>
                          <Radio tag="span" />
                        </UtilityFragment>
                        {item.value}
                      </ListboxItem>
                    ))}
                  </Listbox>
                </ListboxContainer>
              </Combobox>
            );
          };`,
          props:{

          }
    },
    ContentCard:{
      name:'ContentCard',
      template:`import { VisaChevronRightTiny } from '@visa/nova-icons-react';
      import {
        Button,
        ContentCard,
        ContentCardBody,
        ContentCardSubtitle,
        ContentCardTitle,
        Link,
        Typography,
        Utility,
      } from '@visa/nova-react';

      export const DefaultContentCard = () => {
        return (
          <ContentCard>
            <Utility element={<ContentCardBody />} vFlex vFlexCol vGap={4}>
              <ContentCardTitle variant="headline-4">Headline</ContentCardTitle>
              <ContentCardSubtitle variant="subtitle-3">Subtitle</ContentCardSubtitle>
              <Typography className="v-pt-4">
                This is optional text that describes the headline and subtitle in more detail.
              </Typography>
              <Utility vAlignItems="center" vFlex vFlexWrap vGap={16} vPaddingTop={12}>
                <Button>Primary action</Button>
                <Link href="./content-card" noUnderline>
                  Destination label <VisaChevronRightTiny rtl />
                </Link>
              </Utility>
            </Utility>
          </ContentCard>
        );
      };`,
      props:{

      }
    },
    DateandTimeSelector:{
      name:'Date and Time Selector',
      template:`import { Input, InputContainer, Label, Utility } from '@visa/nova-react';

      // TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
      const id = 'default-date-selector';

      export const DefaultDateSelector = () => {
        return (
          <Utility vFlex vFlexCol vGap={4}>
            <Label htmlFor={id}>Label (required)</Label>
            <InputContainer>
              <Input id={id} required type="date" />
            </InputContainer>
          </Utility>
        );
      };`,
      props:{

      }
    },
    Dialog:{
      name:'Dialog',
      template:`import {
          Button,
          Dialog,
          DialogCloseButton,
          DialogContent,
          DialogHeader,
          Typography,
          useFocusTrap,
          Utility,
        } from '@visa/nova-react';

        // TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
        const id = 'dialog';

        export const DefaultDialog = () => {
          const { onKeyNavigation, ref } = useFocusTrap();

          return (
            <>
              <Button onClick={() => ref.current?.showModal()}>Open default dialog</Button>
              <Dialog
                aria-describedby=
                aria-labelledby=
                id={id}
                ref={ref}
                onKeyDown={e => onKeyNavigation(e, ref.current?.open)}
              >
                <DialogContent>
                  <DialogHeader id=>Default title</DialogHeader>
                  <Typography id=>
                    This is required text that describes the dialog title in more detail.
                  </Typography>
                  <Utility vAlignItems="center" vFlex vFlexWrap vGap={8} vPaddingTop={16}>
                    <Button>Primary action</Button>
                    <Button colorScheme="secondary">Secondary action</Button>
                  </Utility>
                </DialogContent>
                <DialogCloseButton onClick={() => ref.current?.close()} />
              </Dialog>
            </>
          );
        };`,
        props:{

        }
    },
    Divider:{
      name:'Divider',
      template:`import { Divider } from '@visa/nova-react';

      export const DefaultDivider = () => {
        return <Divider />;
      };`,
      props:{

      }
    },
    DropdownMenu:{
      name:'DropdownMenu',
      template:`import { useClick, useFloating, useInteractions } from '@floating-ui/react';
      import { VisaChevronDownTiny, VisaChevronUpTiny } from '@visa/nova-icons-react';
      import { useState } from 'react';
      import { Button, DropdownButton, DropdownMenu, Listbox, UtilityFragment } from '@visa/nova-react';

      // TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
      const id = 'dropdown-menu-default';

      export const DefaultDropdownMenu = () => {
        const [open, setOpen] = useState(false);

        const { context, floatingStyles, refs } = useFloating({
          open,
          onOpenChange: setOpen,
          placement: 'bottom-start',
        });

        const onClick = useClick(context);

        const { getReferenceProps, getFloatingProps } = useInteractions([onClick]);

        return (
          // This div is not required, it's used to show the whole dropdown menu in the example
          <div style={{ blockSize: 250 }}>
            <DropdownButton
              aria-controls={id}
              aria-expanded={open}
              id=
              ref={refs.setReference}
              {...getReferenceProps()}
            >
              Action
              {open ? <VisaChevronUpTiny /> : <VisaChevronDownTiny />}
            </DropdownButton>
            {open && (
              <DropdownMenu
                id={id}
                aria-hidden={!open}
                ref={refs.setFloating}
                style={{ inlineSize: '180px', ...floatingStyles }}
                {...getFloatingProps()}
              >
                <UtilityFragment vHide={!open}>
                  <Listbox>
                    <li>
                      <UtilityFragment
                        vFlex
                        vFlexRow
                        vAlignItems="start"
                        vGap={6}
                        vPaddingHorizontal={8}
                        vPaddingVertical={11}
                      >
                        <Button className="v-listbox-item" colorScheme="tertiary" subtle>
                          Label 1
                        </Button>
                      </UtilityFragment>
                    </li>
                    <li>
                      <UtilityFragment
                        vFlex
                        vFlexRow
                        vAlignItems="start"
                        vGap={6}
                        vPaddingHorizontal={8}
                        vPaddingVertical={11}
                      >
                        <Button className="v-listbox-item" colorScheme="tertiary" subtle>
                          Label 3
                        </Button>
                      </UtilityFragment>
                    </li>
                    <li>
                      <UtilityFragment
                        vFlex
                        vFlexRow
                        vAlignItems="start"
                        vGap={6}
                        vPaddingHorizontal={8}
                        vPaddingVertical={11}
                      >
                        <Button className="v-listbox-item" colorScheme="tertiary" subtle>
                          Label 3
                        </Button>
                      </UtilityFragment>
                    </li>
                    <li>
                      <UtilityFragment
                        vFlex
                        vFlexRow
                        vAlignItems="start"
                        vGap={6}
                        vPaddingHorizontal={8}
                        vPaddingVertical={11}
                      >
                        <Button className="v-listbox-item" colorScheme="tertiary">
                          Label 4
                        </Button>
                      </UtilityFragment>
                    </li>
                  </Listbox>
                </UtilityFragment>
              </DropdownMenu>
            )}
          </div>
        );
      };`,
      props:{

      }
    },
    Flag:{
      name:'flag',
      template:`import { Flag, FlagCloseButton, FlagContent, FlagIcon, ScreenReader } from '@visa/nova-react';

      export const DefaultInformationFlag = () => {
        return (
          <Flag>
            <FlagIcon />
            <FlagContent className="v-pl-2 v-pb-2" role="alert" aria-live="polite">
            <ScreenReader>information</ScreenReader>This is required text that describes the flag in more detail.</FlagContent>
            <FlagCloseButton />
          </Flag>
        );
      };`,
      props:{

      }
    },
    Footer:{
      name:'footer',
      template:`// If you are using Vite to run your application, please follow the instruction on the top of the page.
      import { Footer, Link, Utility, VisaLogo } from '@visa/nova-react';

      export const DefaultFooter = () => {
        return (
          <Footer className="v-gap-15">
            <Utility vFlex vMarginRight={1}>
              <VisaLogo aria-label="Visa" />
            </Utility>
            <Utility vFlex vFlexWrap vFlexGrow vJustifyContent="between" vGap={42}>
              {"Copyright © new Date().getFullYear() Visa Inc. All Rights Reserved"}
              <Utility tag="ul" vFlex vFlexWrap vGap={16}>
                <li>
                  <Link href="/footer">Contact us</Link>
                </li>
                <li>
                  <Link href="/footer">Privacy</Link>
                </li>
                <li>
                  <Link href="/footer">Legal/terms and conditions</Link>
                </li>
              </Utility>
            </Utility>
          </Footer>
        );
      };`,
      props:{

      }
    },
    Input: {
      name: 'Input',
      template: `<Utility vFlex vFlexCol vGap={4}>
      <Label htmlFor={id}>Label (required)</Label>
      <InputContainer>
        <Input aria-required="true" id={id} type="text" />
      </InputContainer>
    </Utility>`,
      props: {
        type: 'email',
        placeholder: 'Enter your email',
        required: true
      }
    },
    Link:{
      name:'Link',
      template:`import { Link } from '@visa/nova-react';
    export const DefaultLink = () => {
      return <Link href="./link">Destination label</Link>;
    };`,
    props:{

    }
  },
  ListItem:{
    name:'ListItem',
    template:`// Visa Nova Flutter Demo ListItem Page
        import 'package:flutter/material.dart';
        import 'package:flutter/semantics.dart';
        import 'package:visa_nova_flutter/shared/size_helper.dart';
        import 'package:visa_nova_flutter/visa_nova_flutter.dart';
        import 'package:visa_nova_icons_flutter/visa_nova_icons_flutter.dart';

        class VListItemOneLine extends StatelessWidget {
          const VListItemOneLine({
            Key? key,
            required this.pressed,
          }) : super(key: key);

          final Function()? pressed;

          @override
          Widget build(BuildContext context) {
            return VListItem(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Text(
                    "L1 Label (required)",
                    style: defaultVTheme.textStyles.uiLabelLarge,
                  ),
                ],
              ),
              hasTrailingIcon: true,
              onTap: pressed,
            );
          }
        }`,
        props:{

        },
  },
  ListBox:{
    name:"ListBox",
    template:`import { Label, Listbox, ListboxContainer, ListboxItem, Radio } from '@visa/nova-react';

        // TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
        const id = 'default-single-select-listbox';

        const options = ['Item A', 'Item B', 'Item C', 'Item D', 'Item E', 'Item F', 'Item G'];

        export const DefaultSingleListbox = () => {
          return (
            <fieldset>
              <Label id= tag="legend">
                Label (required)
              </Label>
              <ListboxContainer>
                <Listbox id={id} scroll tag="div">
                  {options.map((option, index) => (
                    <ListboxItem htmlFor={}} key={} tag="label">
                      <Radio className="v-flex-shrink-0" id={"{id}-option-{index}"} name={"{id}-options"} />
                      <Label tag="span">{option}</Label>
                    </ListboxItem>
                  ))}
                </Listbox>
              </ListboxContainer>
            </fieldset>
          );
        };`,
        props:{

        }
  },
  Multiselect:{
    name:'Multiselect',
    template:`import { VisaChevronDownTiny, VisaChevronUpTiny, VisaClearAltTiny } from '@visa/nova-icons-react';
        import {
          Button,
          Checkbox,
          Chip,
          Combobox,
          DropdownContainer,
          Input,
          InputContainer,
          Label,
          Listbox,
          ListboxContainer,
          ListboxItem,
          Utility,
          UtilityFragment,
        } from '@visa/nova-react';
        import { UseComboboxState, UseComboboxStateChangeOptions, useCombobox, useMultipleSelection } from 'downshift';
        import { useState } from 'react';

        type Item = { value: string };

        const id = 'default-multiselect';
        const multiselectItems: Item[] = [
          { value: 'Option A' },
          { value: 'Option B' },
          { value: 'Option C' },
          { value: 'Option D' },
          { value: 'Option E' },
        ];

        export const itemToString = (item: Item | null) => (item ? item.value : '');

        export const comboboxStateReducer = <ItemType,>(
          state: UseComboboxState<ItemType>,
          { type, changes }: UseComboboxStateChangeOptions<ItemType>
        ) => {
          switch (type) {
            case useCombobox.stateChangeTypes.InputClick:
              return {
                // don't open the menu just because the input was clicked
                // instead, wait for an keystroke or a toggle button click
                ...state,
              };
            case useCombobox.stateChangeTypes.InputChange:
              return {
                ...changes,
                // don't update the highlighted index
                highlightedIndex: state.highlightedIndex,
              };
            case useCombobox.stateChangeTypes.ItemMouseMove:
            case useCombobox.stateChangeTypes.MenuMouseLeave:
              return {
                ...changes,
                // don't change the focused item just because the mouse moved
                highlightedIndex: state.highlightedIndex,
              };
            case useCombobox.stateChangeTypes.InputKeyDownEnter:
            case useCombobox.stateChangeTypes.ItemClick:
              return {
                ...changes,
                isOpen: true, // keep the menu open on item select or Enter press
                // and if we're selecting an item, maintain the same highlightedIndex
                ...(changes.selectedItem && { highlightedIndex: state.highlightedIndex }),
              };
            default:
              return changes;
          }
        };

        export const DefaultMultiselect = () => {
          const [inputValue, setInputValue] = useState('');
          const [selectedItems, setSelectedItems] = useState<Item[]>([]);
          const items = multiselectItems;

          const { getDropdownProps, removeSelectedItem } = useMultipleSelection({
            selectedItems,
            onStateChange({ selectedItems: newSelectedItems, type }) {
              if (
                type === useMultipleSelection.stateChangeTypes.SelectedItemKeyDownBackspace ||
                type === useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete ||
                type === useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace ||
                type === useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem
              ) {
                setSelectedItems(newSelectedItems!);
              }
            },
          });
          const {
            getToggleButtonProps,
            getLabelProps,
            getMenuProps,
            getInputProps,
            getItemProps,
            highlightedIndex,
            isOpen,
            setHighlightedIndex,
          } = useCombobox({
            items,
            itemToString,
            inputValue,
            stateReducer: comboboxStateReducer,
            onStateChange({ inputValue: newInputValue, type, selectedItem }) {
              if (type === useCombobox.stateChangeTypes.InputChange) {
                setInputValue(newInputValue!);
              }
              if (type === useCombobox.stateChangeTypes.ItemClick && !!selectedItem) {
                // make sure the highlighted index is on the item that was just clicked
                setHighlightedIndex(items.indexOf(selectedItem));
              }
            },
          });

          return (
            <Combobox>
              <UtilityFragment vFlex vFlexCol vGap={4}>
                <DropdownContainer>
                  <Label {...getLabelProps()}>Label (required)</Label>
                  <UtilityFragment vPaddingVertical={3} vPaddingLeft={3} vPaddingRight={6}>
                    <InputContainer>
                      <Utility vFlex vFlexGrow vFlexShrink vFlexWrap vGap={2}>
                        {selectedItems.map((item, index) => (
                          <UtilityFragment vFlexShrink0 key={"selected-item-{index}"}>
                            <Chip chipSize="compact">
                              <Label>{item.value}</Label>
                              <Button
                                aria-label={"Remove {item.value}"}
                                colorScheme="tertiary"
                                iconButton
                                onClick={() => removeSelectedItem(item)}
                                subtle
                              >
                                <VisaClearAltTiny />
                              </Button>
                            </Chip>
                          </UtilityFragment>
                        ))}
                        <UtilityFragment vFlexShrink style={{ flexBasis: '50px' }}>
                          <Input
                            name={id}
                            {...getInputProps(
                              getDropdownProps({
                                onKeyDown: e => {
                                  if (e.key === 'Enter') {
                                    if (highlightedIndex !== -1 && isOpen) {
                                      const selectedItem = items[highlightedIndex];
                                      if (selectedItems.includes(selectedItem)) {
                                        removeSelectedItem(selectedItem);
                                      } else {
                                        setSelectedItems([...selectedItems, selectedItem]);
                                        setInputValue('');
                                      }
                                    }
                                  }
                                },
                              })
                            )}
                          />
                        </UtilityFragment>
                      </Utility>
                      <Button
                        aria-haspopup="listbox"
                        aria-label={"{id}-toggle-button"}
                        buttonSize="small"
                        colorScheme="tertiary"
                        iconButton
                        {...getToggleButtonProps()}
                      >
                        {isOpen ? <VisaChevronUpTiny /> : <VisaChevronDownTiny />}
                      </Button>
                    </InputContainer>
                  </UtilityFragment>
                </DropdownContainer>
              </UtilityFragment>
              <ListboxContainer>
                <UtilityFragment vFlex>
                  <Listbox {...getMenuProps()}>
                    {items.map((item, index) => (
                      <ListboxItem<HTMLLIElement>
                        key={"{id}-example-{index}"}
                        className={highlightedIndex === index ? 'v-listbox-item-highlighted' : ''}
                        {...getItemProps({
                          item,
                          index,
                          'aria-selected': selectedItems.includes(item),
                          onClick: () => {
                            if (selectedItems.includes(item)) {
                              removeSelectedItem(item);
                            } else {
                              setSelectedItems([...selectedItems, item]);
                              setInputValue('');
                            }
                          },
                        })}
                      >
                        <Checkbox tag="span" />
                        {item.value}
                      </ListboxItem>
                    ))}
                  </Listbox>
                </UtilityFragment>
              </ListboxContainer>
            </Combobox>
          );
        };`,
        props:{

        }
  },
  Pagination:{
    name:"pagination",
    template:`import {
      VisaArrowEndTiny,
      VisaArrowStartTiny,
      VisaChevronLeftTiny,
      VisaChevronRightTiny,
      VisaOptionHorizontalTiny,
    } from '@visa/nova-icons-react';
    import { Button, Pagination, PaginationOverflow } from '@visa/nova-react';

    export const OneDigitPagination = () => {
      return (
        <nav aria-label="1 digit pagination" role="navigation">
          <Pagination className="v-flex v-flex-row v-align-items-center v-gap-4">
            <li className="v-mobile-container-hide">
              <Button aria-label="Go to first page" buttonSize="small" colorScheme="tertiary" disabled iconButton>
                <VisaArrowStartTiny rtl />
              </Button>
            </li>
            <li>
              <Button aria-label="Go to previous page" buttonSize="small" colorScheme="tertiary" disabled iconButton>
                <VisaChevronLeftTiny rtl />
              </Button>
            </li>
            <li>
              <Button aria-current="true" aria-label="Page 1" colorScheme="tertiary">
                1
              </Button>
            </li>
            <li>
              <Button aria-label="Page 2" colorScheme="tertiary">
                2
              </Button>
            </li>
            <li>
              <Button aria-label="Page 3" colorScheme="tertiary">
                3
              </Button>
            </li>
            <li className="v-mobile-container-hide">
              <Button aria-label="Page 4" colorScheme="tertiary">
                4
              </Button>
            </li>
            <li className="v-mobile-container-hide">
              <Button aria-label="Page 5" colorScheme="tertiary">
                5
              </Button>
            </li>
            <li className="v-mobile-container-hide">
              <Button aria-label="Page 6" colorScheme="tertiary">
                6
              </Button>
            </li>
            <li className="v-mobile-container-hide">
              <Button aria-label="Page 7" colorScheme="tertiary">
                7
              </Button>
            </li>
            <PaginationOverflow className="v-flex v-align-items-center v-mobile-container-hide">
              <VisaOptionHorizontalTiny />
            </PaginationOverflow>
            <li className="v-mobile-container-hide">
              <Button aria-label="Page 100" colorScheme="tertiary">
                100
              </Button>
            </li>
            <li>
              <Button aria-label="Go to next page" buttonSize="small" colorScheme="tertiary" iconButton>
                <VisaChevronRightTiny rtl />
              </Button>
            </li>
            <li className="v-mobile-container-hide">
              <Button aria-label="Go to last page" buttonSize="small" colorScheme="tertiary" iconButton>
                <VisaArrowEndTiny rtl />
              </Button>
            </li>
          </Pagination>
        </nav>
      );
    };`,
    props:{

    }
  },
  Panel:{
    name:'Panel',
    template:`import { VisaCloseTiny } from '@visa/nova-icons-react';
        import {
          Button,
          Panel,
          PanelBody,
          PanelContent,
          PanelHeader,
          Typography,
          useFocusTrap,
          Utility,
        } from '@visa/nova-react';

        // TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
        const id = 'modal-panel-default';

        export const ModalPanel = () => {
          const { onKeyNavigation, ref } = useFocusTrap();

          return (
            <>
              <Button onClick={() => ref.current?.showModal()}>Open modal panel</Button>
              <Panel
                aria-describedby={"{id}-description"}
                aria-labelledby={"{id}-title"}
                aria-modal="true"
                id={id}
                onKeyDown={e => onKeyNavigation(e, ref.current?.open)}
                ref={ref}
                tag="dialog"
              >
                <PanelContent>
                  <Utility element={<PanelHeader />} vFlex vFlexRow vJustifyContent="between" vGap={4}>
                    <Typography id={"{id}-title"} tag="h2" variant="headline-3">
                      Panel title
                    </Typography>
                    <Button
                      aria-label="Close panel"
                      buttonSize="small"
                      className="-v-mt-3 -v-mr-8"
                      colorScheme="tertiary"
                      iconButton
                      onClick={() => ref.current?.close()}
                      subtle
                    >
                      <VisaCloseTiny />
                    </Button>
                  </Utility>
                  <PanelBody>
                    <Typography id={"{id}-description"} tag="h3" variant="subtitle-2">
                      Panel subtitle
                    </Typography>
                    <Typography>
                      This is required text that can be used to describe the panel title and subtitle in more detail.
                    </Typography>
                  </PanelBody>
                </PanelContent>
              </Panel>
            </>
          );
        };`,
        props:{

        }
  },
  Progress:{
    name:'Progress',
    template:`import { VisaMediaPauseAltTiny, VisaMediaPlayAltTiny } from '@visa/nova-icons-react';
import { Button, ProgressLabel, ProgressLinear, Utility, UtilityFragment } from '@visa/nova-react';
import { useState } from 'react';

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = 'indeterminate-linear-progress';

export const IndeterminateProgress = () => {
  const [paused, setPaused] = useState(false);
  const [initiated, setInitiated] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState('');

const start = () => {
  setInitiated(true);
  setTimeout(() => {
    setLoadingMsg('Loading...');
  }, 0);
}
  
const reset = () => {
  setInitiated(false);
  setLoadingMsg('');
}

  return (
    <Utility vFlexCol vGap={12}>
        {initiated && (
      <Utility vFlexGrow>
        <UtilityFragment vMarginVertical={8}>
          <ProgressLinear id={id} paused={paused} />
        </UtilityFragment>
        <ProgressLabel htmlFor={id}>
          <Utility tag="span" role="alert">{loadingMsg}</Utility>
        </ProgressLabel>
      </Utility>
        )}
      <Utility vMarginVertical={12} vFlex vGap={12}>
        <Button onClick={() => start()}>
          Start
        </Button>
        <Button colorScheme="secondary" onClick={() => reset()}>
          Reset
        </Button>
        <Button colorScheme="secondary" onClick={() => setPaused(!paused)}>
          {paused ? (
            <>
              <VisaMediaPlayAltTiny />
              Play
            </>
          ) : (
            <>
              <VisaMediaPauseAltTiny />
              Pause
            </>
          )}
        </Button>
      </Utility>
    </Utility>
  );
};`,
    props:{

    }
  },
  Radio:{
    name:'Radio',
    template:`import { Label, Radio, Utility } from '@visa/nova-react';

      // TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
      const id = 'default-radio';

      export const DefaultRadio = () => {
        return (
          <Utility vAlignItems="center" vFlex vGap={2}>
            <Radio id={id} name={id} />
            <Label htmlFor={id}>Label</Label>
          </Utility>
        );
      };`,
      props:{

      }
  },
  SectionMessage:{
    name:'SectionMessage',
    template:`import { SectionMessage } from '@visa/nova-react';

      export const EmptyInformationSectionMessage = () => {
        return <SectionMessage />;
      };`,
      props:{

      }
  },
    Select: {
      name: 'Select',
      template: `import { VisaChevronDownTiny } from '@visa/nova-icons-react';
            import { InputContainer, InputControl, Label, Select, Utility } from '@visa/nova-react';

            // TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
            const id = 'default-select';

            const options = ['Option A', 'Option B', 'Option C', 'Option D', 'Option E'];

            export const DefaultSelect = () => {
            return (
                <Utility tag="fieldset" vFlex vFlexCol vGap={6}>
                <Label htmlFor={id}>Label (required)</Label>
                <InputContainer>
                    <Select id={id} name={}>
                    <option hidden value="" />
                    {options.map((option, index) => (
                        <option key={} value={index}>
                        {option}
                        </option>
                    ))}
                    </Select>
                    <InputControl>
                    <VisaChevronDownTiny />
                    </InputControl>
                </InputContainer>
                </Utility>
            );
            };`,
      props: {
        placeholder: 'Select an option'
      }
    },
    Switch:{
      name:'Switch',
      template:`import { Switch, SwitchLabel, Utility } from '@visa/nova-react';

      const id = 'default-switch-example';

      export const DefaultSwitch = () => {
        return (
          <Utility vFlex vFlexWrap vGap={10} vJustifyContent="between" vMargin={8} style={{ maxInlineSize: '288px' }}>
            <SwitchLabel htmlFor={"{id}-switch"}>Label</SwitchLabel>
            <Switch id={"{id}-switch"} name="default-switch" />
          </Utility>
        );
      };`,
      props:{

      }
    },
    TabBar:{
      name:'TabBar',
      template:`// Visa Nova Flutter Demo TabBar Page
import 'package:flutter/material.dart';
import 'package:visa_nova_flutter/visa_nova_flutter.dart';
import 'package:visa_nova_icons_flutter/visa_nova_icons_flutter.dart';

class TabBarPage extends StatefulWidget {
  const TabBarPage({Key? key}) : super(key: key);

  @override
  State<TabBarPage> createState() => _TabBarPageState();
}

class _TabBarPageState extends State<TabBarPage> {
  int _selectedIndex = 0;
  static final List<Widget> _widgetOptions = <Widget>[
    const ShowCodeAccordion(
      copyLabel: "Tab bar",
      codeSegment: CodeSegments.VTabBar,
      componentName: 'Tab_Bar',
      exampleName: 'Default_Tab_Bar',
    ),
    Text(
      ' ',
      style: defaultVTheme.textStyles.headline2,
    ),
    Text(
      ' ',
      style: defaultVTheme.textStyles.headline2,
    ),
    Text(
      ' ',
      style: defaultVTheme.textStyles.headline2,
    ),
  ];

  final GlobalKey<ScaffoldState> _key = GlobalKey();

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
      print("Tab $index tapped. Updated _selectedIndex to $_selectedIndex");
    });
  }

  @override
  Widget build(BuildContext context) {
    setPageTitle('Tab bar', context);
    return PopScope(
      onPopInvoked: (didPop) {
        ScaffoldMessenger.of(context).clearSnackBars();
      },
      child: Scaffold(
        key: _key,
        appBar: CustomAppBar(globalKey: _key, title: "Tab bar"),
        drawer: const MyDrawer(pageTitle: "Tab bar"),
        body: SingleChildScrollView(
          child: _widgetOptions.elementAt(_selectedIndex),
        ),
        bottomNavigationBar: VBottomNavBar(
          visaBottomNavBarItems: [
            VBottomBarItems(
              icon: VIcons.homeLow,
              label: 'Label 1',
            ),
            VBottomBarItems(
              icon: VIcons.historyLow,
              label: 'Label 2',
            ),
            VBottomBarItems(
              icon: VIcons.goalLow,
              label: 'Label 3',
            ),
            VBottomBarItems(
              icon: VIcons.reportLow,
              label: 'Label 4',
            ),
          ],
          currentIndex: _selectedIndex,
          onTap: _onItemTapped,
        ),
      ),
    );
  }
}`,
      props:{

      }
    },
    Table:{
      name:"Table",
      template:`import { ScreenReader, Table, Tbody, Td, Th, Thead, Tr } from '@visa/nova-react';
import { CSSProperties } from 'react';

export const LargePaddingBandedTable = () => {
  return (
    <Table
      alternate
      style={
        {
          '--v-table-data-padding-block-default': 'var(--v-table-data-padding-block-large)',
          '--v-table-data-block-default': 'var(--v-table-data-block-large)',
        } as CSSProperties
      }
    >
      <ScreenReader tag="caption">Table with large padding and banded rows.</ScreenReader>
      <Thead>
        <Tr>
          <Th scope="col">Column A</Th>
          <Th scope="col">Column B</Th>
          <Th scope="col">Column C</Th>
          <Th scope="col">Column D</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>A1</Td>
          <Td>B1</Td>
          <Td>C1</Td>
          <Td>D1</Td>
        </Tr>
        <Tr>
          <Td>A2</Td>
          <Td>B2</Td>
          <Td>C2</Td>
          <Td>D2</Td>
        </Tr>
        <Tr>
          <Td>A3</Td>
          <Td>B3</Td>
          <Td>C3</Td>
          <Td>D3</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};`,
      props:{

      }
    },
    Tabs:{
      name:'Tabs',
      template:`import { Button, Surface, Tab, Tabs, Utility, UtilityFragment, useTabs } from '@visa/nova-react';

// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const id = 'nova-vertical-tabs-example';

const tabsContent = [
  {
    tabLabel: 'Label 1',
    text: "This is the content area for label 1",
    id: "{id}-tab-0",
  },
  {
    tabLabel: 'Label 2',
    text: "This is the content area for label 2",
    id: "{id}-tab-1",
  },
  {
    tabLabel: 'Label 3',
    text: "This is the content area for label 3",
    id: "{id}-tab-2",
  },
  {
    tabLabel: 'Label 4',
    text: "This is the content area for label 4",
    id: "{id}-tab-3",
  },
];

export const DefaultVerticalTabs = () => {
  const {
    getTabIndex,
    onIndexChange,
    onKeyNavigation,
    ref: tabsRef,
    selectedIndex,
  } = useTabs({ arrowKeyNavigation: 'vertical', defaultSelected: 0 });

  return (
    <Utility vFlex vFlexWrap vGap={8}>
      <Tabs onKeyDown={onKeyNavigation} orientation="vertical" role="tablist" style={{ flexBasis: '30%' }}>
        {tabsContent.map((tabContent, index) => (
          <Tab key={tabContent.id} role="none">
            <Button
              aria-selected={index === selectedIndex}
              aria-controls={tabContent.id}
              colorScheme="tertiary"
              onClick={() => onIndexChange(index)}
              ref={el => {
                tabsRef.current[index] = el;
              }}
              role="tab"
              tabIndex={getTabIndex(index)}
            >
              {tabContent.tabLabel}
            </Button>
          </Tab>
        ))}
      </Tabs>
      <Utility vFlex vFlexGrow vElevation="inset">
        <UtilityFragment vPadding={10}>
          <Surface id={tabsContent[selectedIndex].id} role="tabpanel">
            <span>{tabsContent[selectedIndex]?.text}</span>
          </Surface>
        </UtilityFragment>
      </Utility>
    </Utility>
  );
};`,
      props:{

      }
    },
    ToggleButton:{
      name:'ToggleButton',
      template:`import { Toggle, ToggleContainer, UtilityFragment } from '@visa/nova-react';
      import { useState } from 'react';

      // TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
      const id = 'default-toggle';

      const options = [
        { label: 'Label 1', id: "{id}-label-1", defaultSelected: true },
        { label: 'Label 2', id: "{id}-label-2"},
        { label: 'Label 3', id: "{id}-label-3"},
      ];

      export const DefaultToggles = () => {
        const [togglePressedState, setTogglePressedState] = useState(options.map(o => !!o.defaultSelected));

        const handleSingleSelectTogglePress = (pressedIndex: number) => {
          setTogglePressedState(options.map((_, buttonIndex) => pressedIndex === buttonIndex));
        };

        return (
          <ToggleContainer>
            {options.map((option, optionIndex) => (
              <UtilityFragment key={option.id} vGap={6}>
                <Toggle
                  tag="button"
                  aria-pressed={togglePressedState[optionIndex]}
                  onClick={() => handleSingleSelectTogglePress(optionIndex)}
                >
                  {option.label}
                </Toggle>
              </UtilityFragment>
            ))}
          </ToggleContainer>
        );
      };`,
      props:{

      }
    },
    Tooltips:{
      name:'Tooltips',
      template:`import {
  offset,
  safePolygon,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { Button, Tooltip, Utility } from '@visa/nova-react';
import { useState } from 'react';

export const TopTooltip = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { x, y, strategy, refs, context } = useFloating({
    middleware: [offset(2)],
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'top',
  });

  const dismiss = useDismiss(context);
  const focus = useFocus(context);
  const hover = useHover(context, { handleClose: safePolygon(), move: false });
  const role = useRole(context, { role: 'tooltip' });

  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss, focus, hover, role]);

  return (
    <Utility vFlex vJustifyContent="center" vMargin={24}>
      <Button ref={refs.setReference} {...getReferenceProps()}>
        Primary action
      </Button>
      {isOpen && (
        <Tooltip
          ref={refs.setFloating}
          style={{
            left: x,
            position: strategy,
            top: y,
            width: 'fit-content',
          }}
          {...getFloatingProps()}
        >
          This is a tooltip
        </Tooltip>
      )}
    </Utility>
  );
};`,
      props:{

      }
    },
    TopAppBar:{
      name:'TopAppBar',
      template:`// Visa Nova Flutter Demo AppBar Page
import 'package:visa_nova_icons_flutter/visa_nova_icons_flutter.dart';
import 'package:flutter/material.dart';
import 'package:visa_nova_flutter/visa_nova_flutter.dart';

class VAppBarDefault extends StatelessWidget implements PreferredSizeWidget {
  const VAppBarDefault({
    Key? key,
  }) : super(key: key);
  @override
  Size get preferredSize => const Size.fromHeight(60);

  @override
  Widget build(BuildContext context) {
    return VAppBar(
      backButtonAction: () {
        Navigator.pop(context);
      },
      leading: Semantics(
        label: "Menu",
        button: true,
        child: InkWell(
          customBorder: const CircleBorder(),
          splashColor: VColors.defaultSurfaceLowlight,
          child: Container(
            width: 44,
            height: 44,
            padding: const EdgeInsets.all(16),
            child: const ExcludeSemantics(
              child: VIcon(
                iconColor: VColors.defaultActive,
                svgIcon: VIcons.menuLow,
                iconHeight: 24,
                iconWidth: 24,
              ),
            ),
          ),
          onTap: () {},
        ),
      ),
      title: Semantics(
        label: "Visa Top App Bar",
        child: const VIconAsset(
          svgIcon: "assets/icons/visa.svg",
          iconHeight: 23,
          iconWidth: 71,
        ),
      ),
      actionList: [
        Padding(
          padding: const EdgeInsets.fromLTRB(4, 4, 4, 4),
          child: Semantics(
            label: "Search",
            button: true,
            child: InkWell(
              customBorder: const CircleBorder(),
              splashColor: VColors.defaultSurfaceLowlight,
              child: Container(
                width: 44,
                height: 44,
                padding: const EdgeInsets.all(10),
                child: const ExcludeSemantics(
                  child: VIcon(
                    svgIcon: VIcons.searchLow,
                    iconHeight: 24,
                    iconWidth: 24,
                  ),
                ),
              ),
              onTap: () {},
            ),
          ),
        ),
        Padding(
          padding: const EdgeInsets.fromLTRB(4, 4, 16, 4),
          child: Semantics(
            label: "Profile",
            button: true,
            child: InkWell(
              customBorder: const CircleBorder(),
              splashColor: VColors.defaultSurfaceLowlight,
              child: Container(
                width: 44,
                height: 44,
                padding: const EdgeInsets.all(10),
                child: const ExcludeSemantics(
                  child: VIcon(
                    svgIcon: VIcons.accountLow,
                    iconColor: VColors.defaultActive,
                    iconHeight: 24,
                    iconWidth: 24,
                  ),
                ),
              ),
              onTap: () {},
            ),
          ),
        ),
      ],
    );
  }
}`,
      props:{

      }
    }
  };

//   const createIndent = (level, size = 2) => ' '.repeat(level * size);

// const extractFormNameSimple = (sentence: string): string => {
//     const words = sentence.toLowerCase().split(' ');
    
//     // Look for form-related keywords
//     const formKeywords = ['login', 'register', 'contact', 'signup', 'checkout', 'payment'];
    
//     const foundKeyword = formKeywords.find(keyword => 
//       words.some(word => word.includes(keyword))
//     );
    
//     if (foundKeyword) {
//       // Capitalize first letter and add "Form"
//       return foundKeyword.charAt(0).toUpperCase() + foundKeyword.slice(1) + 'Form';
//     }
    
//     return 'Form'; // Default fallback
//   };

const createIndent = (level:number, size:number = 2) => ' '.repeat(level * size);

const interpolateTemplate = (template, props) => {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    const value = props[key];
    if (typeof value === 'string') return value;
    if (typeof value === 'boolean') return `{${value}}`;
    if (typeof value === 'number') return `{${value}}`;
    return match;
  });
};
export const generateCode = (config:GenerateCode) => {
    const {
      components,
      formName,
      indentSize = 2
    } = config;
  
    const validComponents = components.filter(comp => code_template[comp]);
    
    const imports = validComponents.join(', ');
    
    let code = '';
    
    code += `import React from 'react';\n`;
    code += `import { ${imports} } from '@visa/nova-react';\n\n`;
    
    code += `export default function ${formName}() {\n`;
    
    const hasInput = validComponents.some(comp => ['Input', 'Select','Checkbox','Button'].includes(comp));
    if (hasInput) {
      code += `${createIndent(1, indentSize)}const [formData, setFormData] = React.useState({});\n\n`;
      code += `${createIndent(1, indentSize)}const handleChange = (e) => {\n`;
      code += `${createIndent(2, indentSize)}const { name, value } = e.target;\n`;
      code += `${createIndent(2, indentSize)}setFormData(prev => ({ ...prev, [name]: value }));\n`;
      code += `${createIndent(1, indentSize)}};\n\n`;
      code += `${createIndent(1, indentSize)}const handleSubmit = (e) => {\n`;
      code += `${createIndent(2, indentSize)}e.preventDefault();\n`;
      code += `${createIndent(2, indentSize)}console.log('Form data:', formData);\n`;
      code += `${createIndent(1, indentSize)}};\n\n`;
    }
    
    code += `${createIndent(1, indentSize)}return (\n`;
    
    const formTag = hasInput 
      ? `<form onSubmit={handleSubmit}>`
      : `<form>`;
    
    code += `${createIndent(2, indentSize)}${formTag}\n`;
    
    validComponents.forEach((comp, index) => {
      const config = code_template[comp];
      let componentCode = interpolateTemplate(config.template, config.props);
      
      if (hasInput && ['Input', 'Select'].includes(comp)) {
        componentCode = componentCode.replace(/\/?>$/, ` name="${comp.toLowerCase()}${index}" onChange={handleChange} />`);
      }
      
      code += `${createIndent(3, indentSize)}${componentCode}\n`;
    });
    
    code += `${createIndent(2, indentSize)}</form>\n`;
    code += `${createIndent(1, indentSize)});\n`;
    code += `}`;
    
    return code;
  };

